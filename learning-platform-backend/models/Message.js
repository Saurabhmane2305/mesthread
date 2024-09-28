import mongoose from 'mongoose';  // Use ES module import for mongoose

const messageSchema = new mongoose.Schema({
  sender: String,
  receiver: String,
  content: String,
  createdAt: { type: Date, default: Date.now }
});

// Export the Mongoose model using ES module syntax
export default mongoose.model('Message', messageSchema);
