import Recipe from '../../models/Recipe.js';

const getLatestRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find()
      .select('title coverImage category numberOfFavorites createdAt createdBy')
      .populate('createdBy', 'username')
      .sort({ createdAt: -1 })
      .limit(5)
      .lean()
      .exec();

    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default getLatestRecipes;
