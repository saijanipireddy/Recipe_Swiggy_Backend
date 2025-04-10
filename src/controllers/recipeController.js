import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import recipeModel from '../models/recipeModel.js';

export const addRecipe = async (req, res) => {
  console.log('BODY:', req.body);
  console.log('FILE:', req.file); // ✅ should show uploaded image

  try {
    const { name, desc, price, ingredients } = req.body;

    if (!req.file) {
      return res.status(400).json({ success: false, message: 'Image is required' });
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    });

    fs.unlinkSync(req.file.path); // clean temp file

    const recipe = new recipeModel({
      name,
      desc,
      price,
      ingredients,
      image: result.secure_url
    });

    await recipe.save();
    res.json({ success: true, message: 'Recipe Added' });
  } catch (error) {
    console.error('Add Recipe Error:', error.message);
    res.status(500).json({ success: false, message: 'Failed to add recipe' });
  }
};

export const listRecipe = async (req, res) => {
  const recipes = await recipeModel.find();
  res.json({ success: true, data: recipes });
};

export const updateRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, desc, price, ingredients } = req.body;

    const updatedData = { name, desc, price, ingredients };

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        resource_type: 'image'
      });
      fs.unlinkSync(req.file.path);
      updatedData.image = result.secure_url;
    }

  const updatedRecipe = await recipeModel.findByIdAndUpdate(id, updatedData, { new: true });

    if (!updatedRecipe) {
      return res.status(404).json({ success: false, message: 'Recipe not found' });
    }

    res.json({ success: true, message: 'Recipe Updated', data: updatedRecipe });
  } catch (error) {
    console.error('Update Error:', error.message);
    res.status(500).json({ success: false, message: 'Failed to update recipe' });
  }
};

export const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await recipeModel.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Recipe not found' });
    }

    res.json({ success: true, message: 'Recipe Deleted' });
  } catch (error) {
    console.error('Delete Error:', error.message);
    res.status(500).json({ success: false, message: 'Failed to delete recipe' });
  }
};
