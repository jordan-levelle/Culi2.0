import Recipe from '../../models/Recipe.js';

const createRecipe = async (req, res) => {
  const { userId, newRecipe } = req.body;

  try {
    await Recipe.create({
      ...newRecipe,
      createdBy: userId,
    });

    res.status(200).json({ message: 'Recipe created successfully!' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default createRecipe;
