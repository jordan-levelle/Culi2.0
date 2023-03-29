import validator from 'validator';
import categories from '../../config/categories.js';

const filterRecipesValidation = (req, res, next) => {
  const { createdBy, category, page } = req.body;

  if (createdBy && !validator.isMongoId(createdBy)) {
    return res.status(400).json({ message: 'Invalid createdBy!' });
  }

  if (category && !categories.includes(category)) {
    return res.status(400).json({ message: 'Invalid category!' });
  }

  if (!page || typeof page !== 'number' || page < 1) {
    req.body.page = 1;
  }

  next();
};

export default filterRecipesValidation;
