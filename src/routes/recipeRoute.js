import express from 'express';
import upload from '../middleware/multer.js';
import { addRecipe, listRecipe,updateRecipe,deleteRecipe} from '../controllers/recipeController.js';

const recipeRouter = express.Router();

recipeRouter.post('/add', upload.single('image'), addRecipe); // 
recipeRouter.get('/list', listRecipe);
recipeRouter.put('/update/:id', upload.single('image'), updateRecipe);
recipeRouter.delete('/delete/:id', deleteRecipe);

export default recipeRouter;
