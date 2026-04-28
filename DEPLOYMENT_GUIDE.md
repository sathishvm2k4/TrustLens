# TrustLens Deployment Guide

Complete guide to deploy both frontend and backend to production.

---

## 📋 Pre-Deployment Checklist

- [ ] All environment variables configured
- [ ] Database backups created
- [ ] Tests passing
- [ ] No console errors in development
- [ ] HTTPS certificates ready
- [ ] Domain names secured
- [ ] Email service configured
- [ ] Monitoring tools set up

---

## 🖥️ Backend Deployment

### Option 1: Deploy to Heroku (Recommended for Beginners)

#### Prerequisites
- Heroku account (https://heroku.com)
- Git installed
- Heroku CLI installed

#### Steps

1. **Install Heroku CLI**
   ```bash
   npm install -g heroku
   heroku login
   ```

2. **Create Heroku App**
   ```bash
   cd backend
   heroku create trustlens-api
   ```

3. **Set Environment Variables**
   ```bash
   heroku config:set JWT_SECRET=your_ultra_secret_key_min_32_chars
   heroku config:set MONGODB_URI=your_mongodb_atlas_connection_string
   heroku config:set FRONTEND_URL=https://your-frontend-domain.com
   heroku config:set NODE_ENV=production
   heroku config:set JWT_EXPIRE=7d
   ```

4. **Deploy**
   ```bash
   git push heroku main
   ```

5. **Verify Deployment**
   ```bash
   heroku logs --tail
   heroku open
   ```

   Visit: `https://your-app-name.herokuapp.com/api/health`

#### Alternative: Procfile

Create `backend/Procfile`:
```
web: node server.js
```

---

### Option 2: Deploy to Railway.app

#### Steps

1. **Sign Up**
   - Go to https://railway.app
   - Connect GitHub account

2. **Create Project**
   - New Project → Deploy from GitHub
   - Select trustlens repository

3. **Configure Environment**
   ```
   PORT=5000
   JWT_SECRET=your_secret
   MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/trustlens
   FRONTEND_URL=https://your-frontend.com
   ```

4. **Deploy**
   - Automatic on GitHub push

---

### Option 3: Deploy to AWS (EC2)

#### Setup

1. **Launch EC2 Instance**
   - AMI: Ubuntu 22.04 LTS
   - Instance: t2.micro (free tier)
   - Security: Allow ports 22, 80, 443, 5000

2. **SSH into Server**
   ```bash
   ssh -i your-key.pem ubuntu@your-instance-ip
   ```

3. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

4. **Install MongoDB**
   ```bash
   wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
   echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
   sudo apt-get update
   sudo apt-get install -y mongodb-org
   sudo systemctl start mongod
   ```

5. **Clone Repository**
   ```bash
   git clone your-repo-url
   cd trustlens/backend
   npm install
   ```

6. **Create .env**
   ```bash
   cp .env.example .env
   # Edit .env with production values
   ```

7. **Use PM2 for Process Management**
   ```bash
   sudo npm install -g pm2
   pm2 start server.js --name "trustlens-api"
   pm2 startup
   pm2 save
   ```

8. **Setup Nginx Reverse Proxy**
   ```bash
   sudo apt-get install nginx
   ```

   Create `/etc/nginx/sites-available/trustlens`:
   ```nginx
   server {
       listen 80;
       server_name your-api-domain.com;

       location / {
           proxy_pass http://localhost:5000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   Enable site:
   ```bash
   sudo ln -s /etc/nginx/sites-available/trustlens /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

9. **Setup SSL with Let's Encrypt**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-api-domain.com
   ```

---

## 🎨 Frontend Deployment

### Option 1: Deploy to Vercel (Recommended)

#### Prerequisites
- Vercel account
- GitHub connected

#### Steps

1. **Create Vercel Account**
   - https://vercel.com/signup

2. **Import Project**
   - New Project → Import Git Repository
   - Select trustlens repo

3. **Configure Build**
   - Build Command: `npm run build`
   - Output Directory: `dist`

4. **Set Environment Variables**
   - VITE_API_URL: `https://your-api-domain.com/api`

5. **Deploy**
   - Automatic on push to main

6. **Verify**
   - Visit generated URL
   - Check API connectivity

---

### Option 2: Deploy to Netlify

#### Steps

1. **Sign Up**
   - https://netlify.com

2. **Connect GitHub**
   - New site from Git
   - Select repository

3. **Configure**
   - Build command: `npm run build`
   - Publish directory: `dist`

4. **Add .netlify/netlify.toml**
   ```toml
   [build]
   command = "npm run build"
   publish = "dist"

   [[redirects]]
   from = "/*"
   to = "/index.html"
   status = 200
   ```

5. **Environment Variables**
   - Site settings → Build & deploy → Environment
   - Add VITE_API_URL

---

### Option 3: Deploy to GitHub Pages

#### Steps

1. **Update vite.config.ts**
   ```ts
   export default defineConfig({
     base: '/trustlens/',
     // ... rest of config
   });
   ```

2. **Create GitHub Actions Workflow**

   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - uses: actions/setup-node@v2
           with:
             node-version: '18'
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

3. **Enable Pages**
   - Repository settings → Pages
   - Source: gh-pages branch

---

## 🗄️ Database Setup

### MongoDB Atlas (Recommended)

1. **Create Account**
   - https://www.mongodb.com/cloud/atlas

2. **Create Cluster**
   - Free tier available
   - Choose region near your users

3. **Create Database User**
   - Username: username
   - Strong password
   - Save credentials

4. **Whitelist IP**
   - Network Access → Add IP Address
   - Allow Access from Anywhere (0.0.0.0/0) for testing
   - Restrict in production

5. **Get Connection String**
   - Clusters → Connect → Connect your application
   - Copy connection string
   - Replace `<username>` and `<password>`

6. **Use in .env**
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/trustlens
   ```

---

## 🔒 Environment Variables

### Backend Production (.env)
```
PORT=5000
NODE_ENV=production

# Database
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/trustlens

# JWT
JWT_SECRET=your_super_secret_production_key_min_64_chars
JWT_EXPIRE=7d

# Frontend
FRONTEND_URL=https://yourdomain.com

# Optional: Email, Payment, etc.
SMTP_EMAIL=noreply@trustlens.com
STRIPE_SECRET_KEY=sk_...
```

### Frontend Production (.env)
```
VITE_API_URL=https://api.yourdomain.com/api
VITE_APP_NAME=TrustLens
```

---

## 📊 Monitoring & Logging

### Backend Logs

**Heroku:**
```bash
heroku logs --tail
```

**AWS/Self-hosted:**
```bash
pm2 logs trustlens-api
```

### Frontend Monitoring

Use:
- Sentry (error tracking)
- LogRocket (user sessions)
- Datadog (performance)

### Setup Sentry (Optional)

1. **Create Sentry Account**
   - https://sentry.io

2. **Create Project**
   - React
   - Node.js

3. **Frontend Integration**
   ```ts
   import * as Sentry from "@sentry/react";

   Sentry.init({
     dsn: "your_dsn",
     environment: "production",
     tracesSampleRate: 0.1,
   });
   ```

4. **Backend Integration**
   ```js
   import * as Sentry from "@sentry/node";

   Sentry.init({
     dsn: "your_dsn",
     environment: "production",
     tracesSampleRate: 0.1,
   });
   ```

---

## 🔒 Security Checklist

- [ ] Environment variables not in git
- [ ] HTTPS enabled on all routes
- [ ] CORS properly configured
- [ ] JWT secret is long and random (64+ chars)
- [ ] Passwords hashed with bcrypt
- [ ] Database credentials secure
- [ ] Rate limiting enabled
- [ ] Input validation on all endpoints
- [ ] SQL injection prevention (using mongoose)
- [ ] XSS protection headers set
- [ ] CSRF tokens implemented
- [ ] Sensitive logs redacted
- [ ] Dependencies up to date
- [ ] Regular security audits

---

## 📈 Performance Optimization

### Backend
- Add caching (Redis)
- Use database indexes
- Implement pagination
- Use compression middleware

### Frontend
- Code splitting
- Lazy loading
- Image optimization
- Bundle analysis

---

## 🚨 Troubleshooting Deployment

### Heroku: Crashes on Deploy
```bash
heroku logs --tail
```

Check for:
- Missing environment variables
- Node version mismatch
- Memory issues

### Database Connection Failed
- Check MONGODB_URI
- Verify IP whitelist
- Test with MongoDB Compass

### CORS Error in Production
- Update FRONTEND_URL in backend
- Ensure API URL matches frontend request

### 404 on Frontend Routes
- Add `_redirects` file for SPA routing:
  ```
  /* /index.html 200
  ```

---

## 📝 Post-Deployment

1. **Test API**
   ```bash
   curl https://api.yourdomain.com/api/health
   ```

2. **Test Authentication**
   - Register new user
   - Login and access dashboard
   - Test logout

3. **Monitor Logs**
   - Watch for errors
   - Check database queries
   - Monitor API response times

4. **Setup Backups**
   - MongoDB automatic backups
   - Code repository backup

5. **Document**
   - API endpoints
   - Deployment process
   - Emergency procedures

---

## 🔄 Continuous Deployment (CD)

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: akhileshns/heroku-deploy@v3.13.15
        with:
          heroku_api_key: ${{ secrets.HEROKU_API_KEY }}
          heroku_app_name: trustlens-api
          heroku_email: your@email.com
          
  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: vercel/vercel-action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

## 📞 Support

For deployment issues:
- Check platform documentation
- Review logs for specific errors
- Test locally before deploying
- Ask in community forums

---

## ✅ Final Checklist

- [ ] Backend deployed and running
- [ ] Frontend deployed and running
- [ ] Database configured and backed up
- [ ] Environment variables set
- [ ] SSL certificates installed
- [ ] Monitoring configured
- [ ] Email notifications enabled
- [ ] Team trained on deployment
- [ ] Disaster recovery plan in place
- [ ] Documentation complete

🎉 **Congratulations! Your application is live!**
