import validator from 'validator';
import categories from '../../config/categories.js';

const getAllRecipesValidation = (req, res, next) => {
  const { createdBy, category, page } = req.body;

  if (createdBy && !validator.isMongoId(createdBy)) {
    return res.status(400).json({ message: 'Invalid createdBy!' });
  }

  if (category && !categories.includes(category)) {
    return res.status(400).json({ message: 'Invalid category!' });
  }

  if (!page) {
    req.body.page = 1;
  } else if (typeof page !== 'number' || page < 1) {
    return res.status(400).json({ message: 'Invalid page number!' });
  }

  next();
};

export default getAllRecipesValidation;
