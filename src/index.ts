import express from 'express';
import dotenv from 'dotenv';
import { routes } from './routes';

dotenv.config();

const server = express();
server.use(express.json());

// Import all routes
server.use('/', routes)

const PORT = process.env.PORT || 3333;
server.listen(PORT, () => console.log(`⚡ Server running on port ${PORT}`));
