# Backend Deployment Guide

## Option 1: Railway (Recommended - Free Tier)

### 1. Create Railway Account
1. Go to [Railway](https://railway.app/)
2. Sign up with GitHub
3. Create a new project

### 2. Connect Your Repository
1. Click "Deploy from GitHub repo"
2. Select your repository
3. Choose the `server` folder as the source

### 3. Set Environment Variables
In Railway dashboard, add these environment variables:
```
PORT=5000
MONGODB_URI=mongodb+srv://yourusername:yourpassword@cluster0.xxxxx.mongodb.net/bella-pizza?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=24h
NODE_ENV=production
```

### 4. Deploy
1. Railway will automatically detect it's a Node.js app
2. It will install dependencies and start the server
3. Get your deployment URL (e.g., `https://your-app.railway.app`)

## Option 2: Render (Alternative - Free Tier)

### 1. Create Render Account
1. Go to [Render](https://render.com/)
2. Sign up with GitHub
3. Create a new Web Service

### 2. Connect Repository
1. Connect your GitHub repository
2. Set the root directory to `server`
3. Choose Node.js as the runtime

### 3. Configure Service
- **Name**: bella-pizza-api
- **Environment**: Node
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Plan**: Free

### 4. Set Environment Variables
Add the same environment variables as above

## Option 3: Heroku (Paid)

### 1. Create Heroku Account
1. Go to [Heroku](https://heroku.com/)
2. Create an account
3. Install Heroku CLI

### 2. Deploy
```bash
cd server
heroku create your-app-name
git add .
git commit -m "Initial deployment"
git push heroku main
```

### 3. Set Environment Variables
```bash
heroku config:set MONGODB_URI="your-mongodb-uri"
heroku config:set JWT_SECRET="your-jwt-secret"
heroku config:set NODE_ENV="production"
```

## Testing Your Deployment

1. **Health Check**: Visit `https://your-app-url/api/health`
2. **Seed Database**: Run the seed script or create admin manually
3. **Test API**: Use Postman or curl to test endpoints

## Production Checklist

- [ ] MongoDB Atlas set up and connected
- [ ] Environment variables configured
- [ ] JWT secret changed from default
- [ ] CORS configured for your frontend domain
- [ ] Database seeded with initial data
- [ ] All API endpoints tested
- [ ] SSL certificate enabled (automatic on most platforms) 