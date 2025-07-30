# 🚀 Netlify Deployment Guide

## ✅ Prerequisites Completed
- ✅ Git repository initialized
- ✅ Code pushed to GitHub: https://github.com/srinivasanpandian/pizzablog.git
- ✅ Production build tested successfully
- ✅ Netlify configuration file created (`netlify.toml`)

## 🎯 Step-by-Step Netlify Deployment

### 1. Create Netlify Account
1. Go to [Netlify](https://netlify.com/)
2. Click "Sign up" and create an account (use GitHub for easy integration)

### 2. Deploy from Git
1. In Netlify dashboard, click **"New site from Git"**
2. Choose **"GitHub"** as your Git provider
3. Authorize Netlify to access your GitHub account
4. Select the repository: **`srinivasanpandian/pizzablog`**

### 3. Configure Build Settings
Set these build settings in Netlify:

```
Build command: npm run build
Publish directory: dist
Node version: 18
```

### 4. Environment Variables (Optional for now)
Since we're using the mock backend, you can skip environment variables for now. Later, when you deploy the backend, you'll add:

```
VITE_API_URL=https://your-backend-url.railway.app/api
```

### 5. Deploy
1. Click **"Deploy site"**
2. Wait for the build to complete (usually 2-3 minutes)
3. Your site will be live at: `https://random-name.netlify.app`

### 6. Custom Domain (Optional)
1. Go to **"Domain settings"** in your Netlify dashboard
2. Click **"Add custom domain"**
3. Enter your domain name
4. Follow the DNS configuration instructions

## 🔧 Post-Deployment Setup

### 1. Test Your Site
- Visit your Netlify URL
- Test all pages: Home, About, Menu, Blog, Contact
- Test the admin panel: `/admin`
- Verify the mock backend is working

### 2. Update CORS Settings (When Backend is Ready)
When you deploy the backend, update the CORS origins in your backend environment variables:

```
CORS_ORIGINS=https://your-netlify-app.netlify.app,https://your-custom-domain.com
```

## 📊 Monitoring Your Deployment

### Netlify Dashboard Features
- **Build logs**: See detailed build information
- **Deploy previews**: Test changes before going live
- **Analytics**: Track visitor statistics
- **Forms**: Handle contact form submissions
- **Functions**: Serverless functions (if needed)

### Health Checks
- **Frontend**: Your Netlify URL should load without errors
- **Admin Panel**: `/admin` should be accessible
- **API Calls**: Should work with mock backend initially

## 🛠️ Troubleshooting

### Common Issues

#### Build Fails
- Check build logs in Netlify dashboard
- Verify `package.json` has correct build script
- Ensure all dependencies are in `package.json`

#### Site Not Loading
- Check if the build completed successfully
- Verify the publish directory is `dist`
- Check for JavaScript errors in browser console

#### API Errors
- Initially, the site will use mock data
- When you deploy the backend, update `VITE_API_URL`
- Check CORS configuration

## 🎉 Success Checklist

- [ ] Netlify account created
- [ ] Repository connected
- [ ] Build settings configured
- [ ] Site deployed successfully
- [ ] All pages working
- [ ] Admin panel accessible
- [ ] Mock backend functioning

## 🔄 Next Steps

1. **Test the deployed site thoroughly**
2. **Deploy the backend** (Railway/Render)
3. **Update environment variables** with backend URL
4. **Configure custom domain** (optional)
5. **Set up monitoring and analytics**

---

**Your Bella Pizza website is now live on Netlify!** 🍕✨

**Next**: Deploy the backend to Railway or Render to complete the full-stack application. 