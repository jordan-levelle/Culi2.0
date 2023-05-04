import decodeToken from "../../utils/decodeToken.js";

const authMiddleware = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ message: 'No token provided!' });
  }

  try {
    const decodedToken = await decodeToken(token);

    if (!decodedToken) {
      return res.status(401).json({ message: 'Invalid token!' });
    }

    if (!decodedToken.email_verified) {
      return res.status(401).json({ message: 'User is not verified!' });
    }

    req.uid = decodedToken.uid;

    next();
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

export default authMiddleware;
