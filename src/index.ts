import express from 'express';
import dotenv from 'dotenv';
import session, { SessionOptions } from 'express-session';
import { PrismaSessionStore } from '@quixo3/prisma-session-store';
import { routes } from './routes';
import prisma from './prisma';

dotenv.config();

if (!process.env.SESSION_SECRET) {
  throw new Error('Error: a SESSION_SECRET must be set.');
}

const server = express();
server.use(express.json());

const expressSession: SessionOptions = {
  cookie: {
    maxAge: 15778800000,
    secure: 'auto',
    httpOnly: true,
  },
  secret: process.env.SESSION_SECRET,
  resave: true,
  rolling: true,
  saveUninitialized: true,
  store: new PrismaSessionStore(prisma, {
    checkPeriod: 2 * 60 * 1000,
    dbRecordIdFunction: undefined,
    dbRecordIdIsSessionId: true,
  }),
};

server.use(session(expressSession));

// Import all routes
server.use('/', routes);

const PORT = process.env.PORT || 3333;
server.listen(PORT, () => console.log(`⚡ Server running on port ${PORT}`));
