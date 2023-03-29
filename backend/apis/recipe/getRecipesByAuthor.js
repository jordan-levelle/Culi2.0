import Recipe from '../../models/Recipe';

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
    console.error(err);
  }
};

export default getRecipesByAuthor;
