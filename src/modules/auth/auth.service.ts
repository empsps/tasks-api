import { hash as argonHash } from 'argon2';
import prisma from '../../prisma';
import { RegisterDTO } from './AuthModel';

class AuthService {
  async create(newUser: RegisterDTO) {
    const { email, password, username } = newUser;

    const userExists = await this.userExists(username, email);
    if (userExists) {
      throw new Error(userExists);
    }

    const hashedPassword = await argonHash(password);

    const createdUser = await prisma.user.create({
      data: {
        email,
        username,
        hash: hashedPassword,
      },
    });

    return createdUser;
  }

  async userExists(username?: string, email?: string) {
    if (username) {
      if (await this.findUserByUsername(username)) return 'Username already taken';
    }

    if (email) {
      if (await this.findUserByEmail(email)) return 'E-mail already taken';
    }

    return '';
  }

  async findUserByUsername(username: string) {
    return await prisma.user.findUnique({
      where: {
        username,
      },
    });
  }

  async findUserByEmail(email: string) {
    return await prisma.user.findUnique({
      where: {
        email,
      },
    });
  }
}

export { AuthService };
