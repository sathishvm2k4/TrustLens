import User from "../models/User.js";

// ✅ REGISTER
export const register = async (req, res) => {
  try {
    console.log("🔥 REGISTER HIT");
    console.log("BODY:", req.body);

    const { name, email, password, confirmPassword } = req.body;

    // validation
    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "All fields required",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    // check user
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // create user
    const user = await User.create({
      name,
      email,
      password,
    });

    console.log("✅ USER SAVED:", user);

    res.json({
      success: true,
      message: "User registered",
      user,
    });
  } catch (error) {
    console.log("❌ ERROR:", error.message);
    res.status(500).json({ message: error.message });
  }
};