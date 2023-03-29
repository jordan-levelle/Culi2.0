import Recipe from '../../models/Recipe';
import User from '../../models/User';

const updateIngredients = async (req, res) => {
  const { newIngredients, recipeId, userId } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user.createdRecipes.includes(recipeId)) {
      return res.status(403).json({ message: 'Not authorized!' });
    }

    const recipe = await Recipe.findById(recipeId);

    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found!' });
    }

    recipe.ingredients = newIngredients;

    await recipe.save();

    res.status(200).json({ message: 'Ingredients updated successfully!' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default updateIngredients;
