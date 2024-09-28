import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser'; // Default import of body-parser



import threadRoutes from './routes/threadRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import connectdb from './config/db.js';

const app = express();

// Middleware
const { json } = bodyParser; // Destructure json from body-parser
app.use(json());

// Connect to MongoDB
connectdb();

// Routes
app.use('/api/threads', threadRoutes);
app.use('/api/messages', messageRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
