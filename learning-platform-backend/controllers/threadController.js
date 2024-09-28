import Thread from '../models/Thread.js';  // Import the Thread model

// Create a new thread
export async function createThread(req, res) {
  const { courseId, title, author, content } = req.body;
  try {
    const newThread = new Thread({ courseId, title, author, content });
    await newThread.save();
    res.status(201).json(newThread);
  } catch (error) {
    res.status(400).json({ message: 'Error creating thread', error });
  }
}

// Add a comment to a thread
export async function addComment(req, res) {
  const { threadId } = req.params;
  const { author, content } = req.body;
  try {
    const thread = await Thread.findById(threadId);  // Call findById on the Thread model
    if (!thread) return res.status(404).json({ message: 'Thread not found' });
    thread.comments.push({ author, content });
    await thread.save();
    res.status(201).json(thread);
  } catch (error) {
    res.status(400).json({ message: 'Error adding comment', error });
  }
}

// Get all threads for a course
export async function getThreads(req, res) {
  const { courseId } = req.params;
  try {
    const threads = await Thread.find({ courseId });  // Call find on the Thread model
    res.status(200).json(threads);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching threads', error });
  }
}
