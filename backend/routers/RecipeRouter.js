import express from 'express';
import RecipeController from '../controllers/RecipeController.js';
const router = express.Router();

import getAllRecipesValidation from '../middlewares/recipe/getAllRecipesValidation.js';

router.get('/all', getAllRecipesValidation, RecipeController.getAllRecipes);

export default router;
