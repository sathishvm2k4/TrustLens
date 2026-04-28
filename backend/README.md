# TrustLens Backend

Node.js + Express + MongoDB authentication server for TrustLens.

## 🚀 Quick Start

### Prerequisites
- Node.js v16+ 
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### 1. Installation

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install
```

### 2. Environment Setup

Create a `.env` file in the backend folder:

```bash
cp .env.example .env
```

Edit `.env` with your values:

```
PORT=5000
NODE_ENV=development

# Local MongoDB
MONGODB_URI=mongodb://localhost:27017/trustlens

# OR MongoDB Atlas (recommended)
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/trustlens

# Generate a random JWT secret (min 32 characters)
JWT_SECRET=your_super_secret_jwt_key_min_32_chars_change_this

FRONTEND_URL=http://localhost:8080
JWT_EXPIRE=7d
```

### 3. Start MongoDB

**Option A: Local MongoDB**
```bash
# On Windows
mongod

# On macOS
brew services start mongodb-community

# On Linux
sudo systemctl start mongod
```

**Option B: MongoDB Atlas (Cloud)**
- Create account: https://www.mongodb.com/cloud/atlas
- Create cluster and get connection string
- Use connection string in MONGODB_URI
- Allow IP access in MongoDB Atlas dashboard

### 4. Run Backend

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

You should see:
```
🚀 Server running on http://localhost:5000
```

---

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints

#### 1. Register User
**POST** `/auth/register`

Request:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "confirmPassword": "password123",
  "company": "Acme Corp"
}
```

Response:
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "company": "Acme Corp",
    "role": "user",
    "isVerified": false
  }
}
```

---

#### 2. Login User
**POST** `/auth/login`

Request:
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

Response:
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "company": "Acme Corp",
    "role": "user",
    "isVerified": false
  }
}
```

---

#### 3. Get Current User (Protected)
**GET** `/auth/me`

Headers:
```
Authorization: Bearer <your_jwt_token>
```

Response:
```json
{
  "success": true,
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "company": "Acme Corp",
    "role": "user",
    "isVerified": false
  }
}
```

---

#### 4. Update Profile (Protected)
**PUT** `/auth/update`

Headers:
```
Authorization: Bearer <your_jwt_token>
```

Request:
```json
{
  "name": "Jane Doe",
  "company": "New Company"
}
```

Response:
```json
{
  "success": true,
  "user": {
    "id": "user_id",
    "name": "Jane Doe",
    "email": "john@example.com",
    "company": "New Company",
    "role": "user",
    "isVerified": false
  }
}
```

---

#### 5. Logout (Protected)
**POST** `/auth/logout`

Headers:
```
Authorization: Bearer <your_jwt_token>
```

Response:
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

---

#### 6. Health Check
**GET** `/health`

Response:
```json
{
  "success": true,
  "message": "Backend is running",
  "timestamp": "2024-04-28T10:30:00.000Z"
}
```

---

## 🔒 How JWT Authentication Works

### Token Flow
1. User registers/logs in → Backend returns JWT token
2. Frontend stores token in localStorage
3. For protected routes, frontend sends token in Authorization header
4. Backend verifies token before allowing access

### Token Structure
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## 📁 Project Structure

```
backend/
├── config/
│   └── database.js          # MongoDB connection
├── controllers/
│   └── authController.js    # Auth logic
├── middleware/
│   └── auth.js              # JWT verification
├── models/
│   └── User.js              # User schema
├── routes/
│   └── auth.js              # Auth routes
├── .env.example             # Environment variables template
├── .gitignore               # Git ignore file
├── package.json             # Dependencies
└── server.js                # Main app file
```

---

## 🛠️ Connecting to Frontend

### 1. Create API Service

In `src/lib/api.ts` (frontend):

```typescript
const API_URL = "http://localhost:5000/api";

export const authAPI = {
  register: async (data: any) => {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  login: async (email: string, password: string) => {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    return response.json();
  },

  getMe: async (token: string) => {
    const response = await fetch(`${API_URL}/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.json();
  },

  logout: async (token: string) => {
    const response = await fetch(`${API_URL}/auth/logout`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.json();
  },
};
```

### 2. Store Token in Frontend

```typescript
// After login
const response = await authAPI.login(email, password);
if (response.success) {
  localStorage.setItem("authToken", response.token);
  localStorage.setItem("user", JSON.stringify(response.user));
}
```

### 3. Use Token for Protected Requests

```typescript
const token = localStorage.getItem("authToken");
const response = await fetch("http://localhost:5000/api/auth/me", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
```

---

## 🚀 Deployment

### Deploy to Heroku

1. **Install Heroku CLI**
   ```bash
   npm install -g heroku
   heroku login
   ```

2. **Create Heroku App**
   ```bash
   heroku create your-app-name
   ```

3. **Set Environment Variables**
   ```bash
   heroku config:set JWT_SECRET=your_secret_key
   heroku config:set MONGODB_URI=your_mongodb_atlas_uri
   heroku config:set FRONTEND_URL=your_frontend_url
   ```

4. **Deploy**
   ```bash
   git push heroku main
   ```

### Deploy to Vercel

Use Vercel for serverless backend (requires refactoring).

### Deploy to Railway

1. Connect GitHub repo to Railway
2. Set environment variables
3. Deploy automatically

---

## 📝 Troubleshooting

### MongoDB Connection Error
- Check MongoDB is running
- Verify connection string in .env
- Ensure IP is whitelisted in MongoDB Atlas

### CORS Error
- Frontend URL must match FRONTEND_URL in .env
- Check that CORS middleware is enabled

### Token Expired
- Token expires in 7 days by default
- User must login again to get new token
- Can change JWT_EXPIRE in .env

### Port Already in Use
```bash
# Change PORT in .env or kill process using port 5000
```

---

## 🤝 Contributing

1. Create feature branch
2. Make changes
3. Test thoroughly
4. Submit pull request

---

## 📄 License

MIT License - See LICENSE file

---

## 💬 Support

For issues, open GitHub issue or contact team.
