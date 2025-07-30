# Bella Pizza Backend API

A Node.js/Express backend with MongoDB database for the Bella Pizza restaurant website.

## Features

- **Authentication System**: JWT-based authentication with user roles (admin/user)
- **Blog Management**: Full CRUD operations for blog posts
- **Database**: MongoDB with Mongoose ODM
- **Security**: Password hashing, JWT tokens, role-based access control
- **API Endpoints**: RESTful API for blog posts and user management

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file (or use the existing `config.env`):
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/bella-pizza
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=24h
```

3. Start MongoDB (if running locally):
```bash
# On Windows
mongod

# On macOS/Linux
sudo systemctl start mongod
```

4. Seed the database with initial data:
```bash
npm run seed
```

5. Start the development server:
```bash
npm run dev
```

The server will start on `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)
- `POST /api/auth/create-admin` - Create admin user (for initial setup)

### Blog Posts
- `GET /api/blog` - Get all published posts (public)
- `GET /api/blog/:id` - Get single post (public)
- `POST /api/blog` - Create new post (admin only)
- `PUT /api/blog/:id` - Update post (admin only)
- `DELETE /api/blog/:id` - Delete post (admin only)
- `GET /api/blog/admin/all` - Get all posts including drafts (admin only)

### Health Check
- `GET /api/health` - API health status

## Default Admin Credentials

After running the seed script:
- Email: `admin@bellapizza.com`
- Password: `admin123`

## Database Models

### User
- username (unique)
- email (unique)
- password (hashed)
- role (admin/user)
- createdAt

### BlogPost
- title
- content
- excerpt
- author
- image (URL)
- authorId (ref to User)
- status (draft/published)
- tags (array)
- createdAt
- updatedAt

## Security Features

- Password hashing with bcryptjs
- JWT token authentication
- Role-based access control
- Input validation and sanitization
- CORS enabled for frontend integration

## Development

- `npm run dev` - Start development server with nodemon
- `npm run seed` - Seed database with sample data
- `npm start` - Start production server

## Frontend Integration

The frontend React app should be configured to make API calls to `http://localhost:5000/api/` endpoints. Update the frontend to use these endpoints instead of the Context API. 