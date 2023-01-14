import { Request, Response } from 'express';
import { RegisterUser } from './AuthModel';

export class AuthController {
  register(req: Request, res: Response) {
    const { email, password, username } = req.body;
    const newUser = new RegisterUser();
    Object.assign(newUser, {
      email,
      password,
      username,
    });

    return res.json({ newUser });
  }
}
