import { Router } from 'express';

const routes = Router();

// Get all users
routes.get('/', (req, res) => {
  res.json({ message: 'Get all users' });
});

// Get one user
routes.get('/:userId', (req, res) => {
  res.json({ message: 'Get single user' });
});

// Edit user
routes.put('/edit/:userId', (req, res) => {
  res.json({ message: 'Edit user' });
});

// Delete user
routes.delete('/delete/:userId', (req, res) => {
  const user = req.body;
  res.json({ message: 'Delete user' });
});

export { routes as userRoutes };
