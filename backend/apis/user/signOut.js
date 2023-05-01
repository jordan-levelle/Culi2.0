const signOut = async (_req, res) => {
  res.clearCookie('token');
  res.status(200).json({ message: 'User signed out successfully!' });
};

export default signOut;
