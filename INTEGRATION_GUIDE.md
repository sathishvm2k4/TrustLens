# TrustLens Full Stack Integration Guide

Complete guide to integrate the Express backend with the React frontend.

---

## 📦 Project Structure

```
trustlens/
├── frontend/                   # React app (current folder)
│   ├── src/
│   │   ├── lib/
│   │   │   ├── api.ts         # 🆕 Backend API service
│   │   │   ├── auth-context.tsx      # Existing Supabase auth
│   │   │   └── auth-context-backend.tsx  # 🆕 Express backend auth
│   │   ├── routes/
│   │   ├── components/
│   │   └── ...
│   └── .env                    # Environment variables
│
├── backend/                    # 🆕 Express server
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
```

---

## 🚀 Step 1: Set Up Backend

### Install Dependencies

```bash
cd backend
npm install
```

### Create .env File

```bash
cp .env.example .env
```

Edit `backend/.env`:

```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/trustlens
JWT_SECRET=your_super_secret_jwt_key_min_32_chars_change_this_in_production
FRONTEND_URL=http://localhost:8080
JWT_EXPIRE=7d
```

### Start MongoDB

**Option 1: Local MongoDB**
```bash
mongod
```

**Option 2: MongoDB Atlas (Recommended)**
- Go to https://www.mongodb.com/cloud/atlas
- Create free account
- Create cluster
- Copy connection string
- Use in MONGODB_URI in .env

### Run Backend

```bash
npm run dev
```

Expected output:
```
🚀 Server running on http://localhost:5000
📝 API docs: http://localhost:5000/api
🔗 Frontend URL: http://localhost:8080
```

---

## 🎨 Step 2: Set Up Frontend

### Create Environment File

Create `.env` in frontend root:

```
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=TrustLens
```

### Install API Service

The backend API service is already created at `src/lib/api.ts`. It includes all API methods.

---

## 🔐 Step 3: Implement Authentication Pages

### Option A: Create Login Page

Create `src/routes/login.tsx`:

```tsx
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useAuthBackend } from "@/lib/auth-context-backend";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const { login, error, clearError } = useAuthBackend();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    setIsLoading(true);

    try {
      const success = await login(email, password);
      if (success) {
        navigate({ to: "/dashboard" });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto mt-20">
        <h1 className="text-3xl font-bold mb-6">Login</h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border rounded px-3 py-2"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border rounded px-3 py-2"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-foreground text-primary-foreground py-2 rounded font-semibold hover:opacity-90 disabled:opacity-50"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Don't have account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </Layout>
  );
}
```

### Option B: Create Signup Page

Create `src/routes/signup.tsx`:

```tsx
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useAuthBackend } from "@/lib/auth-context-backend";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/signup")({
  component: SignupPage,
});

function SignupPage() {
  const navigate = useNavigate();
  const { register, error, clearError } = useAuthBackend();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    company: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    setIsLoading(true);

    try {
      const success = await register(
        formData.name,
        formData.email,
        formData.password,
        formData.confirmPassword,
        formData.company
      );

      if (success) {
        navigate({ to: "/dashboard" });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto mt-20">
        <h1 className="text-3xl font-bold mb-6">Create Account</h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="Your Company"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
              className="w-full border rounded px-3 py-2"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-foreground text-primary-foreground py-2 rounded font-semibold hover:opacity-90 disabled:opacity-50"
          >
            {isLoading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Already have account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </Layout>
  );
}
```

### Option C: Create Protected Dashboard

Create `src/routes/dashboard.tsx`:

```tsx
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useAuthBackend } from "@/lib/auth-context-backend";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
});

function Dashboard() {
  const navigate = useNavigate();
  const { user, loading, logout } = useAuthBackend();

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!loading && !user) {
      navigate({ to: "/login" });
    }
  }, [user, loading, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  const handleLogout = async () => {
    await logout();
    navigate({ to: "/" });
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto mt-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border-2 border-foreground p-6">
            <h3 className="text-sm font-bold uppercase mb-2">Name</h3>
            <p className="text-2xl font-bold">{user.name}</p>
          </div>

          <div className="border-2 border-foreground p-6">
            <h3 className="text-sm font-bold uppercase mb-2">Email</h3>
            <p className="text-xl break-all">{user.email}</p>
          </div>

          <div className="border-2 border-foreground p-6">
            <h3 className="text-sm font-bold uppercase mb-2">Company</h3>
            <p className="text-xl">{user.company || "Not provided"}</p>
          </div>
        </div>

        <div className="mt-8 border-2 border-foreground p-6">
          <h2 className="text-2xl font-bold mb-4">Account Details</h2>
          <dl className="space-y-2">
            <div>
              <dt className="font-semibold text-gray-600">User ID</dt>
              <dd className="text-gray-900 font-mono text-sm break-all">{user.id}</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-600">Role</dt>
              <dd className="text-gray-900 capitalize">{user.role}</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-600">Verified</dt>
              <dd className="text-gray-900">
                {user.isVerified ? "✓ Yes" : "✗ No"}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </Layout>
  );
}
```

---

## 🔌 Step 4: Switch to Backend Auth

Update `src/__root.tsx`:

**Change from:**
```tsx
import { AuthProvider } from "@/lib/auth-context";

export const Route = createRootRoute({
  component: () => (
    <AuthProvider>
      {/* content */}
    </AuthProvider>
  ),
});
```

**To:**
```tsx
import { AuthProvider } from "@/lib/auth-context-backend";

export const Route = createRootRoute({
  component: () => (
    <AuthProvider>
      {/* content */}
    </AuthProvider>
  ),
});
```

---

## ✅ Step 5: Test Integration

### 1. Start Backend
```bash
cd backend
npm run dev
# Should show: 🚀 Server running on http://localhost:5000
```

### 2. Start Frontend
```bash
npm run dev
# Should show running on http://localhost:8080
```

### 3. Test Registration
- Go to http://localhost:8080/signup
- Fill form and submit
- Should redirect to /dashboard

### 4. Test Login
- Go to http://localhost:8080/login
- Use email and password from registration
- Should see dashboard with user info

### 5. Test Logout
- Click Logout button
- Should redirect to home page

### 6. Test Protected Route
- Try accessing /dashboard without login
- Should redirect to /login

---

## 📡 API Requests in Components

### Simple Example: Custom Hook

Create `src/hooks/useUser.ts`:

```ts
import { useEffect, useState } from "react";
import { useAuthBackend } from "@/lib/auth-context-backend";
import { authAPI } from "@/lib/api";

export function useUser() {
  const { token } = useAuthBackend();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!token) return;

    const fetchUser = async () => {
      try {
        setIsLoading(true);
        const response = await authAPI.getMe(token);
        if (response.success) {
          setUserData(response.user);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error fetching user");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [token]);

  return { userData, error, isLoading };
}
```

---

## 🌐 CORS Configuration

Backend CORS is configured to allow:
- Frontend URL (http://localhost:8080)
- Credentials enabled
- Common HTTP methods

To add more origins, edit `backend/server.js`:

```js
app.use(cors({
  origin: [
    "http://localhost:8080",
    "http://localhost:3000",
    "https://yourdomain.com"
  ],
  credentials: true,
}));
```

---

## 🚀 Deployment

### Deploy Backend to Heroku

1. **Install Heroku CLI**
   ```bash
   npm install -g heroku
   heroku login
   ```

2. **Create Heroku App**
   ```bash
   cd backend
   heroku create your-app-name
   ```

3. **Set Environment Variables**
   ```bash
   heroku config:set JWT_SECRET=your_secret_key
   heroku config:set MONGODB_URI=your_mongodb_atlas_uri
   heroku config:set FRONTEND_URL=your_frontend_domain
   ```

4. **Deploy**
   ```bash
   git push heroku main
   ```

### Deploy Frontend to Vercel

1. **Connect GitHub**
   - Go to https://vercel.com
   - Import repository

2. **Set Environment Variables**
   ```
   VITE_API_URL=https://your-backend.herokuapp.com/api
   ```

3. **Deploy**
   - Vercel automatically deploys on push

---

## 🔧 Troubleshooting

### CORS Error
**Error:** `Access to XMLHttpRequest blocked by CORS policy`

**Solution:**
- Check FRONTEND_URL in backend .env matches your frontend URL
- Ensure backend server is running
- Check browser console for exact error

### Token Expired
- Tokens expire in 7 days by default
- User must login again
- Change JWT_EXPIRE in .env to extend

### MongoDB Connection Error
- Verify MongoDB is running
- Check connection string in .env
- For MongoDB Atlas, whitelist your IP

### API Not Found
- Ensure backend is running on correct port (5000)
- Check VITE_API_URL in frontend .env

---

## 📚 Next Steps

1. ✅ Add email verification
2. ✅ Implement password reset
3. ✅ Add OAuth (Google, GitHub)
4. ✅ Create admin panel
5. ✅ Add 2FA authentication

---

## 💬 Questions?

Refer to:
- Backend README: `backend/README.md`
- API docs: Visit `http://localhost:5000/api`
- Frontend components: `src/routes/`
