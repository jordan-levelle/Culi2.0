import decodeToken from '../../utils/decodeToken.js';

const signInValidation = async (req, res, next) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: 'Invalid user data!' });
  }

  try {
    const decodedToken = await decodeToken(token);

    if (!decodedToken) {
      return res.status(400).json({ message: 'Invalid user data!' });
    }

    const user = {
      uid: decodedToken.uid,
      provider: decodedToken.firebase.sign_in_provider,
      username: decodedToken.name,
      email: decodedToken.email,
      profilePicture: decodedToken.picture,
      verified: decodedToken.email_verified,
      token,
    };

    req.body.user = user;

    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export default signInValidation;
