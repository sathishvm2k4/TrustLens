import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// 🔐 Generate Token
const generateToken = (id) => {
  return jwt.sign({ id }, "SECRET123", {
    expiresIn: "7d",
  });
};

// ✅ REGISTER
export const register = async (req, res) => {
  try {
    console.log("Register hit:", req.body);

    const { name, email, password } = req.body;

    // check empty fields
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields required",
      });
    }

    // check user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "User registered",
      token: generateToken(user._id),
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// ✅ LOGIN
export const login = async (req, res) => {
  try {
    console.log("Login hit:", req.body);

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid password",
      });
    }

    res.json({
      success: true,
      message: "Login successful",
      token: generateToken(user._id),
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// ✅ GET USER (Protected)
export const getMe = async (req, res) => {
  res.json({
    success: true,
    user: req.user,
  });
};

// ✅ LOGOUT (simple)
export const logout = async (req, res) => {
  res.json({
    success: true,
    message: "Logged out",
  });
};

// ✅ UPDATE PROFILE
export const updateProfile = async (req, res) => {
  res.json({
    success: true,
    message: "Profile updated (not implemented yet)",
  });
};