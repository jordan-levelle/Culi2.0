import User from '../../models/User.js';

const signIn = async (req, res) => {
  const { uid, token } = req.body.user;

  try {
    const existingUser = await User.findOne({ uid });

    if (!existingUser) {
      await User.create({
        uid,
      });
    }

    res.cookie('token', token, { httpOnly: true });
    res.status(200).json({ user: req.body.user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

export default signIn;
