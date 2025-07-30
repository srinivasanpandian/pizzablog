# 🚂 Railway Deployment Guide

## ✅ MongoDB Atlas Setup Complete!
Your MongoDB connection is working: `mongodb+srv://admin:admin@cluster0.fraaz6c.mongodb.net/bella-pizza?retryWrites=true&w=majority&appName=Cluster0`

## 🚀 Deploy to Railway

### Step 1: Create Railway Account
1. Go to [Railway](https://railway.app/)
2. Sign up with GitHub
3. Create a new project

### Step 2: Connect Your Repository
1. Click "Deploy from GitHub repo"
2. Select your repository: `srinivasanpandian/pizzablog`
3. Choose the `server` folder as the source

### Step 3: Set Environment Variables
In Railway dashboard, add these environment variables:

```
PORT=5000
MONGODB_URI=mongodb+srv://admin:admin@cluster0.fraaz6c.mongodb.net/bella-pizza?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=984bb7c112167faa1deb609
JWT_EXPIRE=24h
NODE_ENV=production
```

### Step 4: Deploy
1. Railway will automatically detect it's a Node.js app
2. It will install dependencies and start the server
3. Get your deployment URL (e.g., `https://bella-pizza-api.railway.app`)

## 🔧 Update Frontend

### Step 1: Update Netlify Environment Variables
1. Go to your Netlify dashboard: https://app.netlify.com/sites/boltblog
2. Go to Site settings > Environment variables
3. Add this variable:
   ```
   VITE_API_URL=https://your-railway-backend-url.railway.app/api
   ```

### Step 2: Redeploy Frontend
```bash
npm run deploy
```

## 🧪 Test Your Backend

### Health Check
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

### Test Blog Endpoints
- Get posts: `https://your-railway-backend-url.railway.app/api/blog`
- Admin login: Use the admin panel on your Netlify site

## 🎉 Success Checklist

- [ ] Railway account created
- [ ] Repository connected
- [ ] Environment variables set
- [ ] Backend deployed successfully
- [ ] Health check passes
- [ ] Frontend environment variables updated
- [ ] Frontend redeployed
- [ ] Admin panel working with real backend
- [ ] Blog posts loading from database

---

**Your full-stack application will be complete!** 🍕✨ 