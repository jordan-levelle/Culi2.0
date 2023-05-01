import express from 'express';
import RecipeController from '../controllers/RecipeController.js';

import filterRecipesValidation from '../middlewares/recipe/filterRecipesValidation.js';
import recipeIdValidation from '../middlewares/recipe/recipeIdValidation.js';
import createRecipeValidation from '../middlewares/recipe/createRecipeValidation.js';
import updateIngredientsValidation from '../middlewares/recipe/updateIngredientsValidation.js';
import updateInstructionsValidation from '../middlewares/recipe/updateInstructionsValidation.js';

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

router.get('/:recipeId', recipeIdValidation, RecipeController.getRecipeById);

// This route needs complex validation logic and needs to upload images to S3 first in createRecipeMiddleware
// At this stage we only need to make sure there's no script injection into the database
// But ultimately we need to make sure that there are no profanities in the recipe, and no explicit images
router.post('/', createRecipeValidation, RecipeController.createRecipe);

// This route needs Admin role
router.delete('/:recipeId', recipeIdValidation, RecipeController.deleteRecipe);

router.patch(
  '/ingredients/:recipeId',
  recipeIdValidation,
  updateIngredientsValidation,
  RecipeController.updateIngredients,
);

router.patch(
  '/instructions/:recipeId',
  recipeIdValidation,
  updateInstructionsValidation,
  RecipeController.updateInstructions,
);

export default router;
