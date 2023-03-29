import express from 'express';
import RecipeController from '../controllers/RecipeController.js';

import filterRecipesValidation from '../middlewares/recipe/filterRecipesValidation.js';
import recipeIDValidation from '../middlewares/recipe/recipeIDValidation.js';
import createRecipeValidation from '../middlewares/recipe/createRecipeValidation.js';
import updateIngredientsValidation from '../middlewares/recipe/updateIngredientsValidation.js';

const router = express.Router();

router.get(
  '/category',
  filterRecipesValidation,
  RecipeController.getRecipesByCategory,
);

router.get(
  '/author',
  filterRecipesValidation,
  RecipeController.getRecipesByAuthor,
);

router.get('/latest', RecipeController.getLatestRecipes);

router.get('/:recipeId', recipeIDValidation, RecipeController.getRecipeById);

// This route needs complex validation logic and needs to upload images to S3 first in createRecipeMiddleware
// At this stage we only need to make sure there's no script injection into the database
// But ultimately we need to make sure that there are no profanities in the recipe, and no explicit images
router.post('/', createRecipeValidation, RecipeController.createRecipe);

// This route needs Admin role
router.delete('/:recipeId', recipeIDValidation, RecipeController.deleteRecipe);

router.patch(
  '/ingredients/:recipeId',
  recipeIDValidation,
  updateIngredientsValidation,
  RecipeController.updateIngredients,
);

export default router;
