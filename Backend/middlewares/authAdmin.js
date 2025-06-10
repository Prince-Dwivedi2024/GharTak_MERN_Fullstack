import jwt from "jsonwebtoken";

// Admin authentication middleware
const authAdmin = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // If header missing
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.json({ success: false, message: "Not Authorized, Login Again" });
    }

    const adminToken = authHeader.split(" ")[1]; // Extract the token from "Bearer <token>"

    const decoded = jwt.verify(adminToken, process.env.JWT_SECRET);

    if (decoded.admin !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({ success: false, message: "Not Authorized, Login Again" });
    }

    // All good
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authAdmin;
