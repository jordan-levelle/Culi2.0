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
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  numberOfFavorites: {
    type: Number,
    default: 0,
  },
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

export default Recipe;
