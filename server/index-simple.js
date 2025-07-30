const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mock data for testing
const mockPosts = [
  {
    _id: '1',
    title: 'The Art of Making Perfect Pizza Dough',
    content: 'Making the perfect pizza dough is an art that has been perfected over generations...',
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
    content: 'Our story begins in the cobblestone streets of Naples...',
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
    content: 'Our wood-fired oven isn\'t just a cooking tool – it\'s the heart of our kitchen...',
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

// Mock users
const mockUsers = [
  {
    _id: 'admin1',
    username: 'admin',
    email: 'admin@bellapizza.com',
    role: 'admin'
  }
];

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Bella Pizza API is running (Mock Mode)',
    timestamp: new Date().toISOString()
  });
});

// Mock blog endpoints
app.get('/api/blog', (req, res) => {
  const { page = 1, limit = 10, search } = req.query;
  
  let filteredPosts = mockPosts.filter(post => post.status === 'published');
  
  if (search) {
    filteredPosts = filteredPosts.filter(post => 
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.content.toLowerCase().includes(search.toLowerCase())
    );
  }
  
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + parseInt(limit);
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
  
  res.json({
    success: true,
    data: paginatedPosts,
    pagination: {
      currentPage: parseInt(page),
      totalPages: Math.ceil(filteredPosts.length / limit),
      totalPosts: filteredPosts.length,
      hasNext: endIndex < filteredPosts.length,
      hasPrev: page > 1
    }
  });
});

app.get('/api/blog/:id', (req, res) => {
  const post = mockPosts.find(p => p._id === req.params.id);
  
  if (!post) {
    return res.status(404).json({
      success: false,
      message: 'Blog post not found'
    });
  }
  
  res.json({
    success: true,
    data: post
  });
});

// Mock auth endpoints
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  if (email === 'admin@bellapizza.com' && password === 'admin123') {
    res.json({
      success: true,
      token: 'mock-jwt-token-for-admin',
      user: mockUsers[0]
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Invalid credentials'
    });
  }
});

app.get('/api/auth/me', (req, res) => {
  // Mock authentication check
  const token = req.headers.authorization?.split(' ')[1];
  
  if (token === 'mock-jwt-token-for-admin') {
    res.json({
      success: true,
      user: mockUsers[0]
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Not authorized'
    });
  }
});

// Mock admin blog endpoints
app.get('/api/blog/admin/all', (req, res) => {
  const { page = 1, limit = 10, status } = req.query;
  
  let filteredPosts = mockPosts;
  
  if (status) {
    filteredPosts = mockPosts.filter(post => post.status === status);
  }
  
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + parseInt(limit);
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
  
  res.json({
    success: true,
    data: paginatedPosts,
    pagination: {
      currentPage: parseInt(page),
      totalPages: Math.ceil(filteredPosts.length / limit),
      totalPosts: filteredPosts.length,
      hasNext: endIndex < filteredPosts.length,
      hasPrev: page > 1
    }
  });
});

app.post('/api/blog', (req, res) => {
  const { title, content, excerpt, author, image, tags, status = 'published' } = req.body;
  
  const newPost = {
    _id: Date.now().toString(),
    title,
    content,
    excerpt,
    author,
    image,
    authorId: { _id: 'admin1', username: 'admin' },
    status,
    tags: tags ? tags.split(',').map(tag => tag.trim()) : [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  mockPosts.unshift(newPost);
  
  res.status(201).json({
    success: true,
    data: newPost
  });
});

app.put('/api/blog/:id', (req, res) => {
  const { title, content, excerpt, author, image, tags, status } = req.body;
  
  const postIndex = mockPosts.findIndex(p => p._id === req.params.id);
  
  if (postIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Blog post not found'
    });
  }
  
  const updatedPost = {
    ...mockPosts[postIndex],
    title: title || mockPosts[postIndex].title,
    content: content || mockPosts[postIndex].content,
    excerpt: excerpt || mockPosts[postIndex].excerpt,
    author: author || mockPosts[postIndex].author,
    image: image || mockPosts[postIndex].image,
    status: status || mockPosts[postIndex].status,
    tags: tags ? tags.split(',').map(tag => tag.trim()) : mockPosts[postIndex].tags,
    updatedAt: new Date().toISOString()
  };
  
  mockPosts[postIndex] = updatedPost;
  
  res.json({
    success: true,
    data: updatedPost
  });
});

app.delete('/api/blog/:id', (req, res) => {
  const postIndex = mockPosts.findIndex(p => p._id === req.params.id);
  
  if (postIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Blog post not found'
    });
  }
  
  mockPosts.splice(postIndex, 1);
  
  res.json({
    success: true,
    message: 'Blog post deleted successfully'
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Mock server running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api`);
  console.log(`Admin login: admin@bellapizza.com / admin123`);
}); 