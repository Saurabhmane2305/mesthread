import mongoose from 'mongoose';

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.'mongodb+srv://saurabhmane202:<Saurabh@2005>@cluster0.zq2jy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

export default connectdb;
