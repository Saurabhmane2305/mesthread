import { Schema, model } from 'mongoose';
const commentSchema = new Schema({
  author: String,
  content: String,
  createdAt: { type: Date, default: Date.now }
});

const threadSchema = new Schema({
  courseId: String,
  title: String,
  author: String,
  content: String,
  comments: [commentSchema],
  createdAt: { type: Date, default: Date.now }
});

export default model('Thread', threadSchema);
