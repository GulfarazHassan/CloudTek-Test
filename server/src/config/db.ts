import mongoose, { ConnectOptions } from 'mongoose';
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/u-plumber', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    } as ConnectOptions);

    console.log(`MongoDB is connected at `);
  } catch (error) {
    console.log(`Error connecting to MongoDB ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
