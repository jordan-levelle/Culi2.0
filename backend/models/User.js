import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  profilePicture: {
    type: String,
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
