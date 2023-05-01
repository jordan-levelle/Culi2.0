const signInValidation = (req, res, next) => {
  const { uid, username, email, profilePicture, accessToken } = req.body;

  if (!uid || !username || !email || !profilePicture || !accessToken) {
    return res.status(400).json({ message: 'Invalid user data!' });
  }

  next();
};

export default signInValidation;
