const jwt = require("jsonwebtoken");
const config = require("config");
const jwtSecret = process.env.JWT_SECRET || config.get("jwtSecret");

module.exports = function(req, res, next) {
    // Get token from header
    const token = req.header("x-auth-token");

    // Check if no token
    if (!token) return res.status(401).json({ msg: "No token, authorisation denied" });

    // Verify token
    try {
        const decoded = jwt.verify(token, jwtSecret);

        req.user = decoded.user;
        next();
    } catch (err) {
        return res.status(401).json({ msg: "Token is not valid" });
    }
};
