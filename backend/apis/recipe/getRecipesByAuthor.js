import Recipe from '../../models/Recipe.js';

const getRecipesByAuthor = async (req, res) => {
  const { createdBy, page } = req.body;

  try {
    const recipes = await Recipe.find({ createdBy })
      .select('title coverImage category numberOfFavorites createdAt createdBy')
      .populate('createdBy', 'username')
      .sort({ createdAt: -1 })
      .skip((page - 1) * 10)
      .limit(10)
      .lean()
      .exec();

    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default getRecipesByAuthor;
