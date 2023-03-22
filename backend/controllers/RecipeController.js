import getAllRecipes from '../apis/recipe/getAllRecipes.js';
import getRecipeById from '../apis/recipe/getRecipeById.js';
import deleteRecipe from '../apis/recipe/deleteRecipe.js';

const RecipeController = {
  getAllRecipes,
  getRecipeById,
  deleteRecipe,
};

export default RecipeController;
