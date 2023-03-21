import mongoose from 'mongoose';

mongoose.set('strictQuery', true);

mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => {
    console.log('Connected to database!');
  })
  .catch((err) => {
    console.error(err);
  });

export default mongoose.connection;
