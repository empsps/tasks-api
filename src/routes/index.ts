import { Router } from 'express';
import { authRoutes } from '../modules/auth/auth.routes';
import { userRoutes } from '../modules/user/user.routes';

const routes = Router();
routes.use('/users', userRoutes);
routes.use('/auth', authRoutes);

export { routes };
