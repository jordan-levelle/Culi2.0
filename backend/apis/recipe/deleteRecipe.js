import Recipe from '../../models/Recipe.js';

const deleteRecipe = async (req, res) => {
  const { recipeId } = req.body;

  try {
    await Recipe.findByIdAndDelete(recipeId);

    res.status(200).json({ message: 'Recipe deleted successfully!' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default deleteRecipe;
