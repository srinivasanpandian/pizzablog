// Use environment variable for API URL, fallback to localhost for development
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Mock data for when backend is not available
const mockPosts = [
  {
    _id: '1',
    title: 'The Art of Making Perfect Pizza Dough',
    content: 'Making the perfect pizza dough is an art that has been perfected over generations. Our secret lies in the perfect balance of flour, water, salt, and yeast, combined with the traditional Neapolitan technique that has been passed down through our family for decades. The key is allowing the dough to ferment slowly, developing complex flavors and the perfect texture that creates that signature crispy yet chewy crust that our customers love.',
    excerpt: 'Discover the secrets behind our authentic Italian pizza dough that creates the perfect base for every pizza.',
    author: 'Sofia Rossini',
    image: 'https://images.pexels.com/photos/4252144/pexels-photo-4252144.jpeg',
    authorId: { _id: 'admin1', username: 'admin' },
    status: 'published',
    tags: ['pizza', 'dough', 'traditional', 'neapolitan'],
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z'
  },
  {
    _id: '2',
    title: 'From Naples to Your Table: Our Family Journey',
    content: 'Our story begins in the cobblestone streets of Naples, where my grandfather first learned the art of pizza making from his father. In 1950, he brought these authentic recipes and techniques to America, determined to share the true taste of Naples with his new community. Today, we continue his legacy, using the same traditional methods and family recipes that have made our pizzas famous for over 70 years.',
    excerpt: 'Learn about our family\'s journey from Naples to bringing authentic Italian flavors to your neighborhood.',
    author: 'Marco Rossini',
    image: 'https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg',
    authorId: { _id: 'admin1', username: 'admin' },
    status: 'published',
    tags: ['family', 'history', 'naples', 'tradition'],
    createdAt: '2025-01-10T14:30:00Z',
    updatedAt: '2025-01-10T14:30:00Z'
  },
  {
    _id: '3',
    title: 'The Secret to Our Wood-Fired Oven',
    content: 'Our wood-fired oven isn\'t just a cooking tool – it\'s the heart of our kitchen. Built by master craftsmen using traditional techniques, it reaches temperatures of 800°F (427°C), cooking our pizzas in just 90 seconds. The intense heat creates the perfect char on the crust while keeping the toppings fresh and vibrant. The oak wood we use imparts a subtle smoky flavor that you simply can\'t achieve with any other cooking method.',
    excerpt: 'Explore how our traditional wood-fired oven creates the perfect crispy crust and smoky flavor in every pizza.',
    author: 'Antonio Moretti',
    image: 'https://images.pexels.com/photos/4252144/pexels-photo-4252144.jpeg',
    authorId: { _id: 'admin1', username: 'admin' },
    status: 'published',
    tags: ['wood-fired', 'oven', 'traditional', 'neapolitan'],
    createdAt: '2025-01-05T16:15:00Z',
    updatedAt: '2025-01-05T16:15:00Z'
  }
];

const mockUsers = [
  {
    _id: 'admin1',
    username: 'admin',
    email: 'admin@bellapizza.com',
    role: 'admin'
  }
];

// Helper function to get auth token from localStorage
const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

// Helper function to set auth token in localStorage
const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem('authToken', token);
  } else {
    localStorage.removeItem('authToken');
  }
};

// Helper function to get user from localStorage
const getUser = () => {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
};

// Helper function to set user in localStorage
const setUser = (user) => {
  if (user) {
    localStorage.setItem('user', JSON.stringify(user));
  } else {
    localStorage.removeItem('user');
  }
};

// Generic API request function with fallback to mock data
const apiRequest = async (endpoint, options = {}) => {
  const token = getAuthToken();
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Network error' }));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.warn('API request failed, using mock data:', error.message);
    
    // Return mock data based on the endpoint
    return getMockResponse(endpoint, options, config);
  }
};

// Function to get mock responses
const getMockResponse = (endpoint, options, config) => {
  const method = options.method || 'GET';
  
  switch (endpoint) {
    case '/health':
      return {
        status: 'OK',
        message: 'Bella Pizza API is running (Mock Mode)',
        timestamp: new Date().toISOString(),
        environment: 'mock'
      };
      
    case '/blog':
      return {
        success: true,
        data: mockPosts.filter(post => post.status === 'published'),
        pagination: {
          currentPage: 1,
          totalPages: 1,
          totalPosts: mockPosts.filter(post => post.status === 'published').length,
          hasNext: false,
          hasPrev: false
        }
      };
      
    case '/auth/login':
      if (method === 'POST') {
        const { email, password } = JSON.parse(options.body || '{}');
        if (email === 'admin@bellapizza.com' && password === 'admin123') {
          return {
            success: true,
            token: 'mock-jwt-token-for-admin',
            user: mockUsers[0]
          };
        } else {
          throw new Error('Invalid credentials');
        }
      }
      break;
      
    case '/auth/me':
      const token = config.headers.Authorization?.split(' ')[1];
      if (token === 'mock-jwt-token-for-admin') {
        return {
          success: true,
          user: mockUsers[0]
        };
      } else {
        throw new Error('Not authorized');
      }
      
    case '/blog/admin/all':
      return {
        success: true,
        data: mockPosts,
        pagination: {
          currentPage: 1,
          totalPages: 1,
          totalPosts: mockPosts.length,
          hasNext: false,
          hasPrev: false
        }
      };
      
    case '/blog':
      if (method === 'POST') {
        const newPost = {
          _id: Date.now().toString(),
          ...JSON.parse(options.body || '{}'),
          authorId: { _id: 'admin1', username: 'admin' },
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        mockPosts.unshift(newPost);
        return { success: true, data: newPost };
      }
      break;
      
    default:
      if (endpoint.startsWith('/blog/') && endpoint !== '/blog/admin/all') {
        const id = endpoint.split('/')[2];
        const post = mockPosts.find(p => p._id === id);
        if (post) {
          return { success: true, data: post };
        } else {
          throw new Error('Blog post not found');
        }
      }
      break;
  }
  
  throw new Error('Endpoint not found');
};

// Authentication API
export const authAPI = {
  // Register a new user
  register: async (userData) => {
    const response = await apiRequest('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
    
    if (response.success) {
      setAuthToken(response.token);
      setUser(response.user);
    }
    
    return response;
  },

  // Login user
  login: async (credentials) => {
    const response = await apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
    
    if (response.success) {
      setAuthToken(response.token);
      setUser(response.user);
    }
    
    return response;
  },

  // Get current user
  getCurrentUser: async () => {
    return await apiRequest('/auth/me');
  },

  // Logout user
  logout: () => {
    setAuthToken(null);
    setUser(null);
  },

  // Create admin user (for initial setup)
  createAdmin: async (adminData) => {
    const response = await apiRequest('/auth/create-admin', {
      method: 'POST',
      body: JSON.stringify(adminData),
    });
    
    if (response.success) {
      setAuthToken(response.token);
      setUser(response.user);
    }
    
    return response;
  },
};

// Blog API
export const blogAPI = {
  // Get all published blog posts
  getPosts: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    const endpoint = `/blog${queryString ? `?${queryString}` : ''}`;
    return await apiRequest(endpoint);
  },

  // Get single blog post
  getPost: async (id) => {
    return await apiRequest(`/blog/${id}`);
  },

  // Create new blog post (admin only)
  createPost: async (postData) => {
    return await apiRequest('/blog', {
      method: 'POST',
      body: JSON.stringify(postData),
    });
  },

  // Update blog post (admin only)
  updatePost: async (id, postData) => {
    return await apiRequest(`/blog/${id}`, {
      method: 'PUT',
      body: JSON.stringify(postData),
    });
  },

  // Delete blog post (admin only)
  deletePost: async (id) => {
    return await apiRequest(`/blog/${id}`, {
      method: 'DELETE',
    });
  },

  // Get all posts including drafts (admin only)
  getAllPosts: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    const endpoint = `/blog/admin/all${queryString ? `?${queryString}` : ''}`;
    return await apiRequest(endpoint);
  },
};

// Health check API
export const healthAPI = {
  check: async () => {
    return await apiRequest('/health');
  },
};

// Export utility functions
export const authUtils = {
  getAuthToken,
  setAuthToken,
  getUser,
  setUser,
  isAuthenticated: () => !!getAuthToken(),
  isAdmin: () => {
    const user = getUser();
    return user && user.role === 'admin';
  },
};

// Export API base URL for debugging
export const getApiBaseUrl = () => API_BASE_URL; 