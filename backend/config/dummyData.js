import { LoremIpsum } from 'lorem-ipsum';
import fs from 'fs';
import path from 'path';
import categories from './categories.js';

const numberOfRecipes = 100;

const recipes = new Array();

for (let i = 0; i < numberOfRecipes; i++) {
  const recipe = {};
  recipe.title = `Recipe ${i + 1}`;
  recipe.description = new LoremIpsum({
    sentencesPerParagraph: {
      max: 5,
      min: 3,
    },
    wordsPerSentence: {
      max: 10,
      min: 5,
    },
  }).generateParagraphs(1);
  recipe.category = categories[Math.floor(Math.random() * categories.length)];
  recipe.coverImage = `https://picsum.photos/seed/${i}/350/200`;
  recipe.createdBy = '645433f27c77849f65c953c0';
  recipe.timestamp = Math.floor(Math.random() * 63072000000) + 1577836800000;
  recipe.numberOfFavorites = Math.floor(Math.random() * 100);
  recipes[i] = recipe;
}

const filePath = path.join(path.resolve(), 'backend', 'config', 'recipes.json');

fs.writeFile(filePath, JSON.stringify(recipes), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('File successfully written!');
  }
});
