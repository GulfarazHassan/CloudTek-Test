import mongoose, { ConnectOptions } from 'mongoose';
const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://hassan:hassan123@cluster0.cnj46.mongodb.net/cloudtech?retryWrites=true&w=majority',
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      } as ConnectOptions
    );

    console.log(`MongoDB is connected at `);
  } catch (error) {
    console.log(`Error connecting to MongoDB ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
