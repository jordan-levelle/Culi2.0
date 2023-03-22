import validator from 'validator';

const recipeIdValidation = (req, res, next) => {
  const { recipeId } = req.params;

  if (!validator.isMongoId(recipeId)) {
    return res.status(400).json({ message: 'Invalid recipeId!' });
  }

  next();
};

export default recipeIdValidation;
