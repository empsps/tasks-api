import { Router } from 'express';
import { AuthController } from './auth.controller';

const routes = Router();

const controller = new AuthController();

// Register new user
routes.post('/register', (req, res) => {
  return controller.register(req, res);
});

routes.post('/login', (req, res) => {
  return controller.login(req, res);
});

export { routes as authRoutes };
