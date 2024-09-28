import Message from '../models/Message.js';  // Import the Message model (Ensure .js extension)

// Send a message
export const sendMessage = async (req, res) => {
  const { sender, receiver, content } = req.body;
  try {
    const newMessage = new Message({ sender, receiver, content });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(400).json({ message: 'Error sending message', error });
  }
};

// Get messages for a user
export const getMessages = async (req, res) => {
  const { userId } = req.params;
  try {
    const messages = await Message.find({
      $or: [{ sender: userId }, { receiver: userId }]
    });
    res.status(200).json(messages);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching messages', error });
  }
};
