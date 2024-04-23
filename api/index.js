import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user_route.js';
import authRoutes from './routes/auth_routes.js';

dotenv.config();


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const app = express();

app.use(express.json());

app.listen(3000 , () => {
    console.log('Server is running on port 3000!!')
});

app.use('/api/user' , userRoutes);
app.use('/api/auth' ,authRoutes);


app.use((err,req,res,next) =>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message
  });
});
