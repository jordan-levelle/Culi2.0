const signInValidation = (req, res, next) => {
  const { uid, username, email, profilePicture, token } = req.body;

  if (!uid || !username || !email || !profilePicture || !token) {
    return res.status(400).json({ message: 'Invalid user data!' });
  }

  next();
};

export default signInValidation;
