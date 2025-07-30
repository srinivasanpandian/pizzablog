# 🚀 Production Deployment Guide

Complete guide to deploy Bella Pizza as a production-ready application for clients.

## 📋 Prerequisites

- GitHub account
- MongoDB Atlas account (free tier)
- Railway/Render account (free tier)
- Netlify account (free tier)

## 🔧 Step-by-Step Deployment

### Phase 1: Backend Setup

#### 1.1 Set up MongoDB Atlas
1. Follow the guide in `server/MONGODB_SETUP.md`
2. Get your connection string
3. Test the connection locally

#### 1.2 Deploy Backend to Railway
1. Go to [Railway](https://railway.app/)
2. Create new project from GitHub repo
3. Select the `server` folder
4. Add environment variables:
   ```
   PORT=5000
   MONGODB_URI=your-mongodb-atlas-connection-string
   JWT_SECRET=your-super-secret-jwt-key
   JWT_EXPIRE=24h
   NODE_ENV=production
   ```
5. Deploy and get your backend URL (e.g., `https://bella-pizza-api.railway.app`)

#### 1.3 Test Backend
1. Visit `https://your-backend-url/api/health`
2. Should return: `{"status":"OK","message":"Bella Pizza API is running"}`
3. Run seed script or create admin manually

### Phase 2: Frontend Setup

#### 2.1 Update Environment Variables
1. Create `.env.local` file in the project root:
   ```env
   VITE_API_URL=https://your-backend-url.railway.app/api
   VITE_APP_NAME=Bella Pizza
   VITE_APP_VERSION=1.0.0
   ```

#### 2.2 Test Frontend Locally
```bash
npm run build:prod
npm run preview
```

#### 2.3 Deploy to Netlify
1. Go to [Netlify](https://netlify.com/)
2. Click "New site from Git"
3. Connect your GitHub repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `18`
5. Add environment variables in Netlify dashboard:
   ```
   VITE_API_URL=https://your-backend-url.railway.app/api
   ```
6. Deploy

### Phase 3: Domain & SSL Setup

#### 3.1 Custom Domain (Optional)
1. In Netlify dashboard, go to "Domain settings"
2. Add custom domain
3. Update DNS records
4. SSL certificate will be auto-generated

#### 3.2 Update CORS Settings
1. Go back to Railway backend
2. Update CORS origins in environment variables:
   ```
   CORS_ORIGINS=https://your-netlify-app.netlify.app,https://your-custom-domain.com
   ```

## 🔒 Security Checklist

- [ ] JWT secret changed from default
- [ ] MongoDB password is strong
- [ ] CORS configured for production domains
- [ ] Environment variables not in version control
- [ ] SSL certificates enabled
- [ ] Security headers configured
- [ ] Database access restricted

## 📊 Monitoring & Maintenance

### Health Checks
- Backend: `https://your-backend-url/api/health`
- Frontend: Monitor Netlify build status

### Database Management
- MongoDB Atlas dashboard for monitoring
- Regular backups (automatic with Atlas)
- Monitor connection usage

### Performance
- Netlify provides analytics
- Railway shows resource usage
- Monitor API response times

## 🛠️ Troubleshooting

### Common Issues

#### Backend Connection Refused
- Check if Railway service is running
- Verify environment variables
- Check MongoDB Atlas network access

#### Frontend API Errors
- Verify `VITE_API_URL` is correct
- Check CORS configuration
- Ensure backend is accessible

#### Build Failures
- Check Node.js version compatibility
- Verify all dependencies installed
- Check for TypeScript errors

## 📈 Scaling Considerations

### Free Tier Limits
- **Railway**: $5/month after free tier
- **MongoDB Atlas**: 512MB storage free
- **Netlify**: 100GB bandwidth/month free

### When to Upgrade
- High traffic (>1000 visitors/day)
- Large database (>500MB)
- Need for custom domain SSL
- Advanced analytics requirements

## 🎯 Client Handover

### Documentation to Provide
1. Admin panel access credentials
2. API documentation
3. Database management guide
4. Maintenance procedures
5. Contact information for support

### Training Materials
1. How to create/edit blog posts
2. User management
3. Content updates
4. Basic troubleshooting

## 💰 Pricing for Clients

### Basic Package ($500-1000)
- Website deployment
- Basic admin training
- 1 month support
- Documentation

### Premium Package ($1500-2500)
- Custom domain setup
- Advanced features
- 3 months support
- SEO optimization
- Analytics setup

### Enterprise Package ($3000+)
- Custom features
- Ongoing maintenance
- Priority support
- Performance optimization
- Security audits

## 📞 Support & Maintenance

### Regular Tasks
- Monitor uptime
- Update dependencies
- Backup verification
- Security patches

### Client Communication
- Monthly status reports
- Performance metrics
- Update notifications
- Support ticket system

---

**Need Help?** Check the troubleshooting section or contact support. 