import jwt from "jsonwebtoken"; //dfsdfsf

// User authentication middleware
const authWorker = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // If header missing
    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return res.json({ success: false, message: "Not Authorized, Login Again" });
    }

    const workerToken = authHeader.split(" ")[1]; // Extract the token from "Bearer <token>"

    const decoded = jwt.verify(workerToken, process.env.JWT_SECRET);

   //now provide user id in body
   req.workId = decoded.id

    // All good
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authWorker;
