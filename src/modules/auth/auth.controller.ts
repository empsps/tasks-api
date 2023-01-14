import { validate } from 'class-validator';
import { Request, Response } from 'express';
import { RegisterDTO } from './AuthModel';

export class AuthController {
  async register(req: Request, res: Response) {
    const { email, password, username } = req.body;
    const newUser = new RegisterDTO();
    Object.assign(newUser, { email, password, username });
    validate(newUser, { validationError: { target: false, value: false } }).then((errors) => {
      if (errors.length) {
        return res.status(400).json(errors);
      }
      return res.json(newUser);
    });
  }
}
