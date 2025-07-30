// Use environment variable for API URL, fallback to localhost for development
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

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

// Generic API request function with enhanced error handling
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
    
    // Handle network errors
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Network error' }));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API request failed:', error);
    
    // Enhanced error handling
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error('Unable to connect to server. Please check your internet connection.');
    }
    
    throw error;
  }
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