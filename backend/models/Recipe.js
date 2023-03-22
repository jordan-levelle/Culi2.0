import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [
      {
        name: String,
        quantity: Number,
        unit: String,
      },
    ],
  },
  instructions: {
    type: [
      {
        step: Number,
        description: String,
      },
    ],
  },
  category: {
    type: String,
    required: true,
  },
  coverImage: {
    type: String,
  },
  images: [
    {
      type: String,
    },
  ],
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

export default Recipe;
