import getAllRecipes from '../apis/recipe/getAllRecipes.js';
import getRecipeById from '../apis/recipe/getRecipeById.js';
import deleteRecipe from '../apis/recipe/deleteRecipe.js';
import createRecipe from '../apis/recipe/createRecipe.js';

const RecipeController = {
  getAllRecipes,
  getRecipeById,
  deleteRecipe,
  createRecipe,
};

export default RecipeController;
