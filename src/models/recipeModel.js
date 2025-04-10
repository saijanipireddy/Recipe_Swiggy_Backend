import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: String, required: true },
  ingredients: { type: String, required: true },
  image: { type: String, required: true }
});

const recipeModel = mongoose.models.recipe || mongoose.model('recipe', recipeSchema);

export default recipeModel;
