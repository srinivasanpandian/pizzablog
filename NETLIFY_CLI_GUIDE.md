# 🚀 Netlify CLI Deployment Guide

## ✅ Prerequisites
- Node.js installed
- Git repository set up
- Netlify account

## 🎯 Quick Deployment (3 Steps)

### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify
```bash
netlify login
```
This will open your browser for authentication.

### Step 3: Deploy
```bash
npm run deploy
```

## 🔧 Detailed CLI Commands

### Initialize Netlify Site
```bash
netlify init
```
- Choose "Create & configure a new site"
- Select your team
- Choose site name (optional)

### Build and Deploy
```bash
# Build the project
npm run build

# Deploy to production
netlify deploy --prod --dir=dist

# Or use the npm script
npm run deploy
```

### Preview Deployment
```bash
# Deploy to preview (not production)
npm run deploy:preview
```

### Check Status
```bash
netlify status
```

## 📁 Configuration Files

### netlify.json
```json
{
  "build": {
    "command": "npm run build",
    "publish": "dist"
  },
  "redirects": [
    {
      "from": "/*",
      "to": "/index.html",
      "status": 200
    }
  ]
}
```

### netlify.toml (Alternative)
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 🛠️ Advanced Commands

### Set Environment Variables
```bash
netlify env:set VITE_API_URL "https://your-backend-url.railway.app/api"
```

### List Environment Variables
```bash
netlify env:list
```

### Open Site
```bash
netlify open
```

### View Deploy Logs
```bash
netlify logs
```

## 🎯 Deployment Scripts

### Windows (deploy-netlify.bat)
```batch
@echo off
echo 🍕 Deploying Bella Pizza to Netlify...
npm run build
netlify deploy --prod --dir=dist
echo ✅ Deployment complete!
pause
```

### Linux/Mac (deploy-netlify.sh)
```bash
#!/bin/bash
echo "🍕 Deploying Bella Pizza to Netlify..."
npm run build
netlify deploy --prod --dir=dist
echo "✅ Deployment complete!"
```

## 🔄 Continuous Deployment

### Connect to Git Repository
```bash
netlify sites:create --name your-site-name
netlify link
```

### Set Build Hook
```bash
netlify build:hooks:list
```

## 🛠️ Troubleshooting

### Common Issues

#### Build Fails
```bash
# Check build locally
npm run build

# Check Netlify logs
netlify logs
```

#### Authentication Issues
```bash
# Re-login
netlify logout
netlify login
```

#### Site Not Found
```bash
# Link to existing site
netlify link

# Or create new site
netlify sites:create
```

## 📊 Monitoring

### View Site Analytics
```bash
netlify open:admin
```

### Check Function Logs
```bash
netlify functions:list
netlify functions:logs
```

## 🎉 Success Checklist

- [ ] Netlify CLI installed
- [ ] Logged in to Netlify
- [ ] Build successful locally
- [ ] Deployed to production
- [ ] Site accessible
- [ ] Admin panel working
- [ ] All pages functional

## 🚀 Quick Commands Reference

```bash
# Install CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
npm run deploy

# Preview
npm run deploy:preview

# Status
netlify status

# Open site
netlify open
```

---

**Your Bella Pizza site is now live via CLI!** 🍕✨ 