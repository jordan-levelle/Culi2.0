import User from '../../models/User.js';

const signIn = async (req, res) => {
  const { user } = req.body;

  try {
    const existingUser = await User.findOne({ uid: user.uid });

    if (!existingUser) {
      await User.create({
        uid: user.uid,
        username: user.displayName,
        email: user.email,
        profileImage: user.photoURL,
      });
    }

    res.cookie('token', user.accessToken, { httpOnly: true });
    res.status(200).json({ message: 'User signed in successfully!' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default signIn;
