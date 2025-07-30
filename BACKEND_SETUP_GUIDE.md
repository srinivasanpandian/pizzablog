# 🚀 Complete Backend Setup Guide

## 📋 Prerequisites
- GitHub account
- MongoDB Atlas account (free)
- Railway account (free)

## 🗄️ Step 1: MongoDB Atlas Setup

### 1.1 Create MongoDB Atlas Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Click "Try Free" and create an account
3. Choose "Free" tier (M0) for development

### 1.2 Create a Cluster
1. Click "Build a Database"
2. Choose "FREE" tier (M0)
3. Select your preferred cloud provider (AWS, Google Cloud, or Azure)
4. Choose a region close to your users
5. Click "Create"

### 1.3 Set Up Database Access
1. Go to "Database Access" in the left sidebar
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Create a username and password (save these!)
5. Select "Read and write to any database"
6. Click "Add User"

### 1.4 Set Up Network Access
1. Go to "Network Access" in the left sidebar
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (0.0.0.0/0)
4. Click "Confirm"

### 1.5 Get Connection String
1. Go to "Database" in the left sidebar
2. Click "Connect"
3. Choose "Connect your application"
4. Copy the connection string
5. Replace `<password>` with your database user password
6. Replace `<dbname>` with `bella-pizza`

**Example connection string:**
```
mongodb+srv://yourusername:yourpassword@cluster0.xxxxx.mongodb.net/bella-pizza?retryWrites=true&w=majority
```

## 🚂 Step 2: Deploy Backend to Railway

### 2.1 Create Railway Account
1. Go to [Railway](https://railway.app/)
2. Sign up with GitHub
3. Create a new project

### 2.2 Connect Your Repository
1. Click "Deploy from GitHub repo"
2. Select your repository: `srinivasanpandian/pizzablog`
3. Choose the `server` folder as the source

### 2.3 Set Environment Variables
In Railway dashboard, add these environment variables:

```
PORT=5000
MONGODB_URI=mongodb+srv://yourusername:yourpassword@cluster0.xxxxx.mongodb.net/bella-pizza?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=24h
NODE_ENV=production
```

### 2.4 Deploy
1. Railway will automatically detect it's a Node.js app
2. It will install dependencies and start the server
3. Get your deployment URL (e.g., `https://bella-pizza-api.railway.app`)

## 🔧 Step 3: Update Frontend Environment Variables

### 3.1 Update Netlify Environment Variables
1. Go to your Netlify dashboard
2. Go to Site settings > Environment variables
3. Add this variable:
   ```
   VITE_API_URL=https://your-railway-backend-url.railway.app/api
   ```

### 3.2 Redeploy Frontend
```bash
npm run deploy
```

## 🧪 Step 4: Test Your Backend

### 4.1 Health Check
Visit: `https://your-railway-backend-url.railway.app/api/health`

Should return:
```json
{
  "status": "OK",
  "message": "Bella Pizza API is running",
  "environment": "production",
  "database": "connected"
}
```

### 4.2 Test Blog Endpoints
- Get posts: `https://your-railway-backend-url.railway.app/api/blog`
- Admin login: Use the admin panel on your Netlify site

## 🔒 Step 5: Security Checklist

- [ ] JWT secret changed from default
- [ ] MongoDB password is strong
- [ ] Environment variables set
- [ ] CORS configured for your Netlify domain
- [ ] Database seeded with initial data

## 📊 Step 6: Monitoring

### Railway Dashboard
- Monitor resource usage
- View deployment logs
- Check application status

### MongoDB Atlas Dashboard
- Monitor database performance
- View connection usage
- Check storage usage

## 🛠️ Troubleshooting

### Common Issues

#### Backend Not Starting
- Check Railway logs
- Verify environment variables
- Ensure MongoDB connection string is correct

#### Database Connection Failed
- Check MongoDB Atlas network access
- Verify username/password
- Ensure database name is correct

#### Frontend Can't Connect
- Verify `VITE_API_URL` is correct
- Check CORS configuration
- Ensure backend is running

## 🎉 Success Checklist

- [ ] MongoDB Atlas cluster created
- [ ] Database user created
- [ ] Network access configured
- [ ] Railway project created
- [ ] Environment variables set
- [ ] Backend deployed successfully
- [ ] Frontend environment variables updated
- [ ] Health check passes
- [ ] Admin panel working
- [ ] Blog posts loading

---

**Your full-stack application is now production-ready!** 🍕✨ 