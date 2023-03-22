import express from 'express';
import RecipeController from '../controllers/RecipeController.js';

import getAllRecipesValidation from '../middlewares/recipe/getAllRecipesValidation.js';
import recipeIDValidation from '../middlewares/recipe/recipeIDValidation.js';

const router = express.Router();

router.get('/', getAllRecipesValidation, RecipeController.getAllRecipes);

// This route needs complex validation logic and needs to upload images to S3 first in createRecipeMiddleware
// At this stage we only need to make sure there's no script injection into the database
// But ultimately we need to make sure that there are no profanities in the recipe, and no explicit images
router.post('/', RecipeController.createRecipe);

router.get('/:recipeId', recipeIDValidation, RecipeController.getRecipeById);

// This route needs Admin role
router.delete('/:recipeId', recipeIDValidation, RecipeController.deleteRecipe);

export default router;
