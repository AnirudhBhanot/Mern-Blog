import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const app = express();

app.listen(3000 , () => {
    console.log('Server is running on port 3000!!')
});