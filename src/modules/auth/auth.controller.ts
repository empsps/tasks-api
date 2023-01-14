import { validate } from 'class-validator';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { RegisterDTO } from './AuthModel';

const service = new AuthService();

export class AuthController {
  async register(req: Request, res: Response) {
    const { email, password, username } = req.body;

    const newUser = new RegisterDTO();
    Object.assign(newUser, { email, password, username });

    const errors = await validate(newUser, { validationError: { target: false, value: false } });
    if (errors.length) {
      return res.status(400).json(errors);
    }

    try {
      const createdUser = await service.create(newUser);
      return res.status(201).json({ username: createdUser.username, email: createdUser.email });
    } catch (error) {
      return res.status(500).json({ error: 'Something went wrong' });
    }
  }
}
