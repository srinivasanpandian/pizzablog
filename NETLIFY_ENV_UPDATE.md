# 🔧 Update Netlify Environment Variables

## 🚂 Railway Backend URL
Your Railway backend is deployed at: `https://pizzablog-production.up.railway.app/`

## 📝 Steps to Update Netlify:

### Step 1: Go to Netlify Dashboard
1. Visit: https://app.netlify.com/sites/boltblog
2. Click on your site: `boltblog`

### Step 2: Add Environment Variable
1. Go to **Site settings** (top menu)
2. Click **Environment variables** (left sidebar)
3. Click **Add a variable**
4. Add this variable:
   - **Key**: `VITE_API_URL`
   - **Value**: `https://pizzablog-production.up.railway.app/api`
5. Click **Save**

### Step 3: Redeploy
1. Go to **Deploys** tab
2. Click **Trigger deploy** → **Deploy site**
3. Wait for deployment to complete

## 🧪 Test Your App
After redeploy:
- Visit: https://boltblog.netlify.app
- Admin login: admin@bellapizza.com / admin123
- Blog posts should load from Railway backend

## 🔍 Troubleshooting
If backend shows 502 error:
1. Check Railway dashboard for deployment status
2. Verify environment variables in Railway
3. Check Railway logs for errors

---

**Your full-stack app will be complete!** 🍕✨ 