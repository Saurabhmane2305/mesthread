import express from 'express';
import { createThread, addComment, getThreads } from '../controllers/threadController.js';  // Ensure .js extension

const router = express.Router();

router.post('/:courseId', createThread);  // Create a new thread
router.post('/:threadId/comments', addComment);  // Add a comment to a thread
router.get('/:courseId', getThreads);  // Get all threads for a course

export default router;
