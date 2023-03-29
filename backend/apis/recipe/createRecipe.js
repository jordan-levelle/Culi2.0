import Recipe from '../../models/Recipe.js';
import User from '../../models/User.js';

const createRecipe = async (req, res) => {
  const { userId, newRecipe } = req.body;

  try {
    const recipe = await Recipe.create({
      ...newRecipe,
      createdBy: userId,
    });

    const user = await User.findById(userId);
    user.createdRecipes.push(recipe._id);
    await user.save();

    res.status(200).json({ message: 'Recipe created successfully!' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default createRecipe;
