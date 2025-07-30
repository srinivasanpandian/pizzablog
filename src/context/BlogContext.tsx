import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { blogAPI } from '../services/api';

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  image: string;
  authorId: {
    _id: string;
    username: string;
  };
  status: 'draft' | 'published';
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

interface BlogContextType {
  posts: BlogPost[];
  loading: boolean;
  error: string | null;
  addPost: (post: Omit<BlogPost, '_id' | 'authorId' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  updatePost: (id: string, post: Partial<BlogPost>) => Promise<void>;
  deletePost: (id: string) => Promise<void>;
  refreshPosts: () => Promise<void>;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};

interface BlogProviderProps {
  children: ReactNode;
}

export const BlogProvider: React.FC<BlogProviderProps> = ({ children }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await blogAPI.getPosts();
      if (response.success) {
        setPosts(response.data);
      } else {
        setError('Failed to fetch posts');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch posts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const addPost = async (postData: Omit<BlogPost, '_id' | 'authorId' | 'createdAt' | 'updatedAt'>) => {
    try {
      setError(null);
      const response = await blogAPI.createPost(postData);
      if (response.success) {
        setPosts(prevPosts => [response.data, ...prevPosts]);
      } else {
        setError('Failed to create post');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create post');
      throw err;
    }
  };

  const updatePost = async (id: string, postData: Partial<BlogPost>) => {
    try {
      setError(null);
      const response = await blogAPI.updatePost(id, postData);
      if (response.success) {
        setPosts(prevPosts => 
          prevPosts.map(post => 
            post._id === id ? response.data : post
          )
        );
      } else {
        setError('Failed to update post');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update post');
      throw err;
    }
  };

  const deletePost = async (id: string) => {
    try {
      setError(null);
      const response = await blogAPI.deletePost(id);
      if (response.success) {
        setPosts(prevPosts => prevPosts.filter(post => post._id !== id));
      } else {
        setError('Failed to delete post');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete post');
      throw err;
    }
  };

  const refreshPosts = async () => {
    await fetchPosts();
  };

  const value: BlogContextType = {
    posts,
    loading,
    error,
    addPost,
    updatePost,
    deletePost,
    refreshPosts
  };

  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  );
};