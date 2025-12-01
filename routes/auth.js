const express = require("express");
const User = require("../models/User");

const router = express.Router();

// ✅ REGISTER API
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({
      name,
      email,
      password
    });

    await user.save();
    res.status(201).json({ message: "User registered successfully ✅" });

  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// ✅ LOGIN API
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json({ message: "Login successful ✅" });

  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
