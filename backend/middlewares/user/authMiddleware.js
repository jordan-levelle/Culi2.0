import admin from '../../config/firebase.js';

const authMiddleware = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ message: 'No token provided!' });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.uid = decodedToken.uid;

    next();
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

export default authMiddleware;
