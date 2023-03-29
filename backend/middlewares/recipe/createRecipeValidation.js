import validator from 'validator';
import categories from '../../config/categories';

const createRecipeValidation = (req, res, next) => {
  const { title, description, category } = req.body;
  const newRecipe = {};

  if (!title || typeof title !== 'string' || title.length > 100) {
    return res.status(400).json({ message: 'Invalid title!' });
  }

  if (
    !description ||
    typeof description !== 'string' ||
    description.length > 1000
  ) {
    return res.status(400).json({ message: 'Invalid description!' });
  }

  if (!category || !categories.includes(category)) {
    return res.status(400).json({ message: 'Invalid category!' });
  }

  newRecipe.title = validator.escape(title);
  newRecipe.description = validator.escape(description);
  newRecipe.category = category;

  req.body.newRecipe = newRecipe;

  next();
};

export default createRecipeValidation;
