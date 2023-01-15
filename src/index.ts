import express from 'express';
import dotenv from 'dotenv';
import session from 'express-session';
import { PrismaSessionStore } from '@quixo3/prisma-session-store';
import { routes } from './routes';
import cookieParser from 'cookie-parser';
import prisma from './prisma';

dotenv.config();

if (!process.env.SESSION_SECRET) {
  throw new Error('Error: a SESSION_SECRET must be set.');
}

const server = express();
server.use(express.json());
server.use(
  session({
    cookie: {
      maxAge: 31560000000000,
    },
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    store: new PrismaSessionStore(prisma, {
      checkPeriod: 2 * 60 * 1000,
      dbRecordIdFunction: undefined,
      dbRecordIdIsSessionId: true,
    }),
  }),
);

// Import all routes
server.use('/', routes);

const PORT = process.env.PORT || 3333;
server.listen(PORT, () => console.log(`⚡ Server running on port ${PORT}`));
