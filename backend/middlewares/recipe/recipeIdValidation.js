import validator from 'validator';

const recipeIDValidation = (req, res, next) => {
  const { recipeId } = req.params;

  if (!validator.isMongoId(recipeId)) {
    return res.status(400).json({ message: 'Invalid recipe ID' });
  }

  req.body.recipeId = recipeId;

  next();
};

export default recipeIDValidation;
