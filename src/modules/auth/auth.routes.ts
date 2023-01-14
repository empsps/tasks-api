import { Router } from 'express';
import { AuthController } from './auth.controller';

const routes = Router();

const controller = new AuthController();

// Register new user
routes.post('/register', (req, res) => {
  return controller.register(req, res);
});

routes.post('/login', (req, res) => {
  res.json({ message: 'Login' });
});

export { routes as authRoutes };
