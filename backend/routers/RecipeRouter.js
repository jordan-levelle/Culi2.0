import express from 'express';
import RecipeController from '../controllers/RecipeController.js';

import getAllRecipesValidation from '../middlewares/recipe/getAllRecipesValidation.js';
import recipeIdValidation from '../middlewares/recipe/recipeIdValidation.js';

const router = express.Router();

router.get('/all', getAllRecipesValidation, RecipeController.getAllRecipes);

router.get('/:recipeId', recipeIdValidation, RecipeController.getRecipeById);

// This route needs Admin role
router.delete(
  '/:recipeId',
  recipeIdValidation,
  RecipeController.deleteRecipeById,
);

export default router;
