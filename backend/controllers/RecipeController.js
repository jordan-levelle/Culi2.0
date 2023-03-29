import getRecipeById from '../apis/recipe/getRecipeById.js';
import deleteRecipe from '../apis/recipe/deleteRecipe.js';
import createRecipe from '../apis/recipe/createRecipe.js';
import getLatestRecipes from '../apis/recipe/getLatestRecipes.js';
import getRecipesByCategory from '../apis/recipe/getRecipesByCategory.js';
import getRecipesByAuthor from '../apis/recipe/getRecipesByAuthor.js';

const RecipeController = {
  getRecipeById,
  deleteRecipe,
  createRecipe,
  getLatestRecipes,
  getRecipesByCategory,
  getRecipesByAuthor,
};

export default RecipeController;
