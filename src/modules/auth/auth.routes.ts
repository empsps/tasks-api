import { Router } from 'express';

const routes = Router();

// Register new user
routes.post('/register', (req, res) => {
  res.json({ message: 'Register' });
});

routes.post('/login', (req, res) => {
  res.json({ message: 'Login' });
});

export { routes as authRoutes };
