@echo off
echo 🍕 Deploying Bella Pizza to Netlify...

REM Check if Netlify CLI is installed
netlify --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Netlify CLI not found. Installing...
    npm install -g netlify-cli
)

REM Check if user is logged in
netlify status >nul 2>&1
if errorlevel 1 (
    echo 🔐 Please login to Netlify...
    netlify login
)

REM Build the project
echo 🔨 Building project...
npm run build

REM Deploy to Netlify
echo 🚀 Deploying to Netlify...
netlify deploy --prod --dir=dist

echo ✅ Deployment complete!
echo 🌐 Your site is now live!
pause 