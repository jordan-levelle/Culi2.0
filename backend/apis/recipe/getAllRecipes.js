import Recipe from '../../models/Recipe.js';

const getAllRecipes = async (req, res) => {
  const { createdBy, category, page } = req.body;
  const limit = 15;
  const skip = (page - 1) * limit;

  try {
    let recipes = null;
    if (createdBy || category) {
      recipes = await Recipe.find({ $or: [{ createdBy }, { category }] })
        .select('title coverImage category numberOfLikes createdAt createdBy')
        .populate(createdBy, 'username')
        .skip(skip)
        .limit(limit)
        .lean()
        .exec();
    } else {
      recipes = await Recipe.find()
        .select('title coverImage category numberOfLikes createdAt createdBy')
        .populate(createdBy, 'username')
        .skip(skip)
        .limit(limit)
        .lean()
        .exec();
    }

    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default getAllRecipes;
