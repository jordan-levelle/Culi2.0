import express from 'express';
import RecipeController from '../controllers/RecipeController.js';

import getAllRecipesValidation from '../middlewares/recipe/getAllRecipesValidation.js';
import recipeIDValidation from '../middlewares/recipe/recipeIDValidation.js';

const router = express.Router();

router.get('/all', getAllRecipesValidation, RecipeController.getAllRecipes);

router.get('/:recipeId', recipeIDValidation, RecipeController.getRecipeById);

// This route needs Admin role
router.delete('/:recipeId', recipeIDValidation, RecipeController.deleteRecipe);

export default router;
