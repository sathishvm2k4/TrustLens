# TrustLens Quick Start Guide

Get the full stack running in 10 minutes.

---

## ⚡ 5-Minute Backend Setup

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Create .env
```bash
cp .env.example .env
```

Edit `backend/.env`:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/trustlens
JWT_SECRET=change_this_to_a_random_key_min_32_chars
FRONTEND_URL=http://localhost:8080
```

### 3. Start MongoDB
```bash
mongod
```

### 4. Run Backend
```bash
npm run dev
```

Expected:
```
🚀 Server running on http://localhost:5000
```

✅ **Backend is ready!**

---

## ⚡ 5-Minute Frontend Setup

### 1. Install Dependencies (Already done)
```bash
npm install
```

### 2. Create .env
```bash
cp .env.example .env
```

Edit `.env`:
```
VITE_API_URL=http://localhost:5000/api
```

### 3. Update Auth Provider

Edit `src/__root.tsx`:

**Replace:**
```tsx
import { AuthProvider } from "@/lib/auth-context";
```

**With:**
```tsx
import { AuthProvider } from "@/lib/auth-context-backend";
```

### 4. Run Frontend
```bash
npm run dev
```

Expected:
```
VITE v7.3.2 ready in XXms

➜ Local: http://localhost:8080/
```

✅ **Frontend is ready!**

---

## ✅ Test the Integration

### 1. Open Browser
```
http://localhost:8080
```

### 2. Click "Get started" or Go to /signup
```
http://localhost:8080/signup
```

### 3. Register Account
- Name: John Doe
- Email: john@example.com
- Password: password123
- Company: Acme Corp

### 4. Should Redirect to Dashboard
```
http://localhost:8080/dashboard
```

See your user information displayed!

### 5. Click Logout
Should redirect to home page.

### 6. Login Again
```
http://localhost:8080/login
```

Use your email and password.

---

## 📚 Generated Files

### Backend Files Created:
```
backend/
├── config/database.js         # MongoDB connection
├── controllers/authController.js
├── middleware/auth.js
├── models/User.js
├── routes/auth.js
├── server.js                   # Main app
├── package.json
├── .env.example
├── .gitignore
└── README.md
```

### Frontend Files Created:
```
src/
├── lib/
│   ├── api.ts                  # Backend API service ✨ NEW
│   └── auth-context-backend.tsx # Auth with backend ✨ NEW
└── routes/
    ├── login.tsx               # Example ✨ NEW
    ├── signup.tsx              # Example ✨ NEW
    └── dashboard.tsx           # Example ✨ NEW
```

### Documentation Created:
```
├── INTEGRATION_GUIDE.md        # How to integrate frontend & backend
├── DEPLOYMENT_GUIDE.md         # How to deploy to production
└── backend/README.md           # Backend documentation
```

---

## 🔗 API Endpoints

| Method | Endpoint | Auth | Purpose |
|--------|----------|------|---------|
| POST | `/auth/register` | ❌ | Create account |
| POST | `/auth/login` | ❌ | Login user |
| GET | `/auth/me` | ✅ | Get current user |
| POST | `/auth/logout` | ✅ | Logout user |
| PUT | `/auth/update` | ✅ | Update profile |
| GET | `/health` | ❌ | Health check |

---

## 🔑 Important Files to Remember

### Backend Configuration
- `backend/.env` - Environment variables
- `backend/server.js` - Main app server
- `backend/models/User.js` - User database schema

### Frontend Integration
- `src/lib/api.ts` - API service
- `src/lib/auth-context-backend.tsx` - Auth state management
- `.env` - Frontend env variables

---

## 🛠️ Common Commands

### Backend
```bash
cd backend
npm run dev      # Development with auto-reload
npm start        # Production
```

### Frontend
```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview build
```

---

## 🐛 Troubleshooting

### "Cannot find module" Error
```bash
npm install
```

### MongoDB Connection Error
- Make sure `mongod` is running
- Check MONGODB_URI in .env

### CORS Error
- Verify FRONTEND_URL in backend .env matches http://localhost:8080
- Restart backend after changing .env

### Port Already in Use
Change PORT in backend .env

---

## 📖 Next Steps

1. **Review Documentation**
   - Read `INTEGRATION_GUIDE.md` for details
   - Read `backend/README.md` for API docs

2. **Customize Pages**
   - Edit `src/routes/login.tsx`
   - Edit `src/routes/signup.tsx`
   - Edit `src/routes/dashboard.tsx`

3. **Add More Features**
   - Email verification
   - Password reset
   - User profile page
   - Settings page

4. **Deploy**
   - See `DEPLOYMENT_GUIDE.md`
   - Deploy backend to Heroku/Railway
   - Deploy frontend to Vercel/Netlify

---

## 💡 Pro Tips

### Store Token Securely
Token is stored in localStorage (simple) but consider:
- sessionStorage (cleared on browser close)
- Cookies with httpOnly flag (more secure)
- IndexedDB (larger capacity)

### Add Loading States
Use `isLoading` from auth context:
```tsx
{isLoading && <Spinner />}
{!isLoading && <Content />}
```

### Handle Errors
Display error messages:
```tsx
{error && <ErrorAlert message={error} />}
```

### Redirect Protected Routes
Use `useEffect` to redirect unauthenticated users:
```tsx
useEffect(() => {
  if (!user && !loading) navigate({ to: "/login" });
}, [user, loading]);
```

---

## 📞 Need Help?

- **Backend Issues?** → See `backend/README.md`
- **Integration Issues?** → See `INTEGRATION_GUIDE.md`
- **Deployment Issues?** → See `DEPLOYMENT_GUIDE.md`
- **API Not Working?** → Check `http://localhost:5000/api/health`

---

## 🎉 You're All Set!

Your full-stack TrustLens application is now running with:

✅ React frontend (already running)
✅ Express backend (newly created)
✅ MongoDB database
✅ JWT authentication
✅ Protected routes
✅ User registration & login
✅ Complete documentation

**Happy coding! 🚀**
