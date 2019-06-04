const express = require("express");
const router = express.Router();
const auth = require("../../../middleware/auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator/check");
const jwtSecret = process.env.JWT_SECRET || config.get("jwtSecret");

const User = require("../../../models/User");

/**
 * @route   GET api/v1/auth/me
 * @desc    Get logged in users details
 * @access  Private
 */
router.get("/me", auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        return res.json(user);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send("Server error");
        console.log("Testing");
    }
});

/**
 * @route   POST api/v1/auth
 * @desc    Authenticate user and get token
 * @access  Public
 */
router.post(
    "/",
    [
        check("email", "Please include a valid email").isEmail(),
        check("password", "A password is required").exists(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        const { email, password } = req.body;

        try {
            const user = await User.findOne({ email });

            if (!user) return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });

            const payload = {
                user: {
                    id: user.id,
                },
            };

            jwt.sign(payload, jwtSecret, { expiresIn: 86400 }, (err, token) => {
                if (err) throw err;
                return res.json({ token });
            });
        } catch (err) {
            console.error(err.message);
            return res.status(500).send("Server error");
        }
    },
);

module.exports = router;
