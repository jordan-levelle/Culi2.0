import Recipe from '../../models/Recipe.js';

const getRecipeById = async (req, res) => {
  const { recipeId } = req.params;

  try {
    const recipe = await Recipe.findById(recipeId)
      .populate('createdBy', 'username')
      .lean()
      .exec();

    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found!' });
    }

    res.status(200).json(recipe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default getRecipeById;
