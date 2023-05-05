import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  favoriteRecipes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Recipe',
    },
  ],
  createdRecipes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Recipe',
    },
  ],
});

const User = mongoose.model('User', UserSchema);

export default User;
