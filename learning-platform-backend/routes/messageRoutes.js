import express from 'express';
import { sendMessage, getMessages } from '../controllers/messageController.js';  // Ensure the correct file extension (.js)

const router = express.Router();

router.post('/', sendMessage);  // Send a message
router.get('/:userId', getMessages);  // Get messages for a user

export default router;
