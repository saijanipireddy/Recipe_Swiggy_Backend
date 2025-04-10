import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';
import recipeRouter from './src/routes/recipeRoute.js';
import userRouter from './src/routes/userRoute.js';
import { middleWare } from './src/middleware/authMiddleware.js';

const app = express();
const port = process.env.PORT || 4000;

connectDB();
connectCloudinary();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/recipe', recipeRouter);
app.use('/api/user', userRouter)

//Middleware Checking working or Not 
app.get('/my', middleWare, async (req,res) => {
    res.send("Hello Its a MiddleWare ")
})


app.listen(port, () => console.log(`Server Started on ${port}`));
