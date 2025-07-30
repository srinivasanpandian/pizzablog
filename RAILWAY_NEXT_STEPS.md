# 🚂 Railway Deployment - Next Steps

## ✅ Railway Connection Complete!

### 🔧 Step 1: Set Environment Variables
In Railway dashboard, add these variables:

```
PORT=5000
MONGODB_URI=mongodb+srv://admin:admin@cluster0.fraaz6c.mongodb.net/bella-pizza?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=984bb7c112167faa1deb609
JWT_EXPIRE=24h
NODE_ENV=production
```

### 🚀 Step 2: Deploy
1. Railway will automatically build and deploy
2. Wait for deployment to complete
3. Get your Railway URL (e.g., `https://bella-pizza-api.railway.app`)

### 🧪 Step 3: Test Your Backend
Visit: `https://your-railway-url.railway.app/api/health`

Should return:
```json
{
  "status": "OK",
  "message": "Bella Pizza API is running",
  "environment": "production",
  "database": "connected"
}
```

### 🔧 Step 4: Update Frontend
1. Go to Netlify: https://app.netlify.com/sites/boltblog
2. Site settings > Environment variables
3. Add: `VITE_API_URL=https://your-railway-url.railway.app/api`
4. Redeploy: `npm run deploy`

### 🎉 Step 5: Test Complete App
- Frontend: https://boltblog.netlify.app
- Admin login: admin@bellapizza.com / admin123
- Blog posts should load from real database

## 📊 What You'll Have:
✅ **Frontend**: Netlify  
✅ **Backend**: Railway  
✅ **Database**: MongoDB Atlas  
✅ **Full Stack**: Complete application  

---

**Your Bella Pizza app will be production-ready!** 🍕✨ 