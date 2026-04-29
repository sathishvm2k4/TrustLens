import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import authRoutes from "./routes/auth.js";
import User from "./models/User.js";

dotenv.config();

const app = express();

// 🔗 CONNECT DB
connectDB();

// 🔐 MIDDLEWARE
app.use(
  cors({
    origin: "http://localhost:5173", // frontend
    credentials: true,
  })
);

app.use(express.json());

// 📋 REQUEST LOG
app.use((req, res, next) => {
  console.log(`➡️ ${req.method} ${req.path}`);
  next();
});

// 🔗 ROUTES
app.use("/api/auth", authRoutes);

// 🔥 DEBUG ROUTE (CHECK DATA)
app.get("/users", async (req, res) => {
  try {
    const users = await User.find().select("+password");
    console.log("📦 USERS IN DB:", users);
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ HEALTH
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// 🚀 START
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});