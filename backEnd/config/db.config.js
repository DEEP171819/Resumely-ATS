
import mongoose from 'mongoose';

/**
 * Mongoose Database Connection
 */
const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI is not configured in .env');
  }

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      dbName: process.env.MONGO_DATABASE || 'resumely',
      serverSelectionTimeoutMS: 10000
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);

    return conn;
  } catch (error) {
    console.error('MongoDB Connection Failed:', error.message);
    throw error;
  }
};

export default connectDB;
