@echo off
echo 🚀 Deploying Bella Pizza Backend to Railway...

echo.
echo 📋 Prerequisites:
echo 1. MongoDB Atlas account and cluster
echo 2. Railway account
echo 3. GitHub repository connected

echo.
echo 🗄️ Step 1: MongoDB Atlas Setup
echo - Go to https://www.mongodb.com/atlas
echo - Create free account and cluster
echo - Get your connection string

echo.
echo 🚂 Step 2: Railway Deployment
echo - Go to https://railway.app/
echo - Connect your GitHub repo: srinivasanpandian/pizzablog
echo - Select server folder
echo - Add environment variables

echo.
echo 🔧 Environment Variables to Add:
echo PORT=5000
echo MONGODB_URI=mongodb+srv://yourusername:yourpassword@cluster0.xxxxx.mongodb.net/bella-pizza?retryWrites=true^&w=majority
echo JWT_SECRET=984bb7c112167faa1deb609
echo JWT_EXPIRE=24h
echo NODE_ENV=production

echo.
echo 🌐 Step 3: Update Frontend
echo - Get your Railway URL
echo - Update Netlify environment variable: VITE_API_URL=https://your-railway-url.railway.app/api
echo - Redeploy frontend: npm run deploy

echo.
echo ✅ Backend deployment guide created!
echo 📖 See BACKEND_SETUP_GUIDE.md for detailed instructions
pause 