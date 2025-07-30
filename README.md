# Bella Pizza Restaurant Website

A full-stack restaurant website built with React, TypeScript, Node.js, Express, and MongoDB. Features a beautiful frontend for customers and a secure admin panel for content management.

## 🍕 Features

### Frontend (React + TypeScript)
- **Modern UI**: Beautiful, responsive design with Tailwind CSS
- **Pages**: Home, About, Menu, Blog, Contact, Admin
- **Blog System**: Display blog posts with tags and categories
- **Admin Panel**: Secure content management system
- **Authentication**: JWT-based login system

### Backend (Node.js + Express)
- **RESTful API**: Complete CRUD operations for blog posts
- **Authentication**: JWT tokens with role-based access control
- **Database**: MongoDB with Mongoose ODM
- **Security**: Password hashing, input validation, CORS
- **File Upload**: Support for image URLs

### Database (MongoDB)
- **User Management**: Admin and regular user roles
- **Blog Posts**: Full content management with drafts
- **Data Persistence**: All data stored securely in MongoDB

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone and navigate to the project**
```bash
cd project
```

2. **Install frontend dependencies**
```bash
npm install
```

3. **Install backend dependencies**
```bash
cd server
npm install
cd ..
```

4. **Set up MongoDB**
   - Install MongoDB locally, or
   - Use MongoDB Atlas (cloud service)
   - Update the connection string in `server/config.env`

5. **Seed the database**
```bash
cd server
npm run seed
cd ..
```

6. **Start the backend server**
```bash
cd server
npm run dev
```

7. **Start the frontend (in a new terminal)**
```bash
npm run dev
```

8. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000
   - Admin Panel: http://localhost:5173/admin

## 🔐 Default Admin Credentials

After running the seed script:
- **Email**: `admin@bellapizza.com`
- **Password**: `admin123`

## 📁 Project Structure

```
project/
├── src/                    # Frontend React app
│   ├── components/         # Reusable components
│   ├── context/           # React Context (BlogContext)
│   ├── pages/             # Page components
│   ├── services/          # API service layer
│   └── ...
├── server/                # Backend Node.js app
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── middleware/        # Authentication middleware
│   ├── config.env         # Environment variables
│   └── ...
└── ...
```

## 🛠️ API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `POST /api/auth/create-admin` - Create admin user

### Blog Posts
- `GET /api/blog` - Get all published posts
- `GET /api/blog/:id` - Get single post
- `POST /api/blog` - Create new post (admin only)
- `PUT /api/blog/:id` - Update post (admin only)
- `DELETE /api/blog/:id` - Delete post (admin only)
- `GET /api/blog/admin/all` - Get all posts including drafts (admin only)

### Health Check
- `GET /api/health` - API status

## 🔧 Development

### Frontend Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Backend Commands
```bash
cd server
npm run dev          # Start development server with nodemon
npm run seed         # Seed database with sample data
npm start            # Start production server
```

## 🗄️ Database Models

### User
```javascript
{
  username: String (unique),
  email: String (unique),
  password: String (hashed),
  role: String (admin/user),
  createdAt: Date
}
```

### BlogPost
```javascript
{
  title: String,
  content: String,
  excerpt: String,
  author: String,
  image: String (URL),
  authorId: ObjectId (ref to User),
  status: String (draft/published),
  tags: [String],
  createdAt: Date,
  updatedAt: Date
}
```

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcryptjs for password security
- **Role-Based Access**: Admin and user roles
- **Input Validation**: Server-side validation
- **CORS**: Cross-origin resource sharing enabled
- **Environment Variables**: Secure configuration management

## 🎨 Frontend Features

- **Responsive Design**: Works on all devices
- **Modern UI**: Clean, professional design
- **Loading States**: User-friendly loading indicators
- **Error Handling**: Graceful error messages
- **Form Validation**: Client-side validation
- **Real-time Updates**: Immediate UI updates

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting service

### Backend (Heroku/Railway)
1. Set environment variables
2. Deploy the `server` folder
3. Update frontend API URL to production backend

### Database (MongoDB Atlas)
1. Create MongoDB Atlas cluster
2. Update connection string in backend
3. Set up database access and network access

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues:
1. Check the console for error messages
2. Verify MongoDB is running
3. Ensure all dependencies are installed
4. Check environment variables are set correctly

## 🎯 Next Steps

Potential enhancements:
- Image upload functionality
- User registration for customers
- Order management system
- Payment integration
- Email notifications
- Search functionality
- Pagination for blog posts
- Social media integration 