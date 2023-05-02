import User from '../../models/User.js';

const signIn = async (req, res) => {
  const { uid, username, email, profilePicture, token } = req.body;

  try {
    const existingUser = await User.findOne({ uid });

    if (!existingUser) {
      await User.create({
        uid,
        username,
        email,
        profilePicture,
      });
    }

    res.cookie('token', token, { httpOnly: true });
    res.status(200).json({ message: 'User signed in successfully!' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default signIn;
