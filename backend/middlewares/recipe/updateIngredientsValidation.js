import validator from 'validator';
import units from '../../config/units';

const updateIngredientsValidation = (req, res, next) => {
  const { ingredients } = req.body;

  if (!ingredients || !Array.isArray(ingredients) || ingredients.length === 0) {
    return res.status(400).json({ message: 'Invalid ingredients!' });
  }

  for (let i = 0; i < ingredients.length; i++) {
    const ingredient = ingredients[i];

    if (
      !ingredient.name ||
      typeof ingredient.name !== 'string' ||
      ingredient.name.length > 50
    ) {
      return res
        .status(400)
        .json({ message: `Invalid ingredient name!: ${ingredient.name}` });
    } else {
      ingredient.name = validator.escape(ingredient.name);
    }

    if (
      !ingredient.quantity ||
      typeof ingredient.quantity !== 'number' ||
      ingredient.quantity < 0
    ) {
      return res.status(400).json({ message: 'Invalid ingredient quantity!' });
    }

    if (!units.includes(ingredient.unit)) {
      return res.status(400).json({ message: 'Invalid ingredient unit!' });
    }
  }

  next();
};

export default updateIngredientsValidation;
