const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

// Signup Route
router.post(
  "/signup",
  [
    body("name").notEmpty(),
    body("email").isEmail(),
    body("password").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const user = new User({ name, email, password: hashedPassword });
      await user.save();
      res.json({ message: "User registered successfully!" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

// Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });
  res.json({ token, user: { name: user.name, email: user.email } });
});

module.exports = router;
