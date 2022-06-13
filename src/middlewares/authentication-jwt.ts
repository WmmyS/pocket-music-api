import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { LoginAuthentication } from '../tools/authentication/model/login.authentication';

const keySecret = 'teste';

export class AuthenticationJWT {
  generateToken(login: LoginAuthentication) {
    let token = '';
    try {
      token = jwt.sign({ id: login.id, email: login.email }, keySecret, {
        expiresIn: '720h',
      });
      console.log('Token generated for ' + login.email);
    } catch (error: any) {
      console.log(error.name + ' - ' + error.message);
    }

    return token;
  }

  async authethentication(
    req: Request,
    res: Response,
    next: any,
  ): Promise<any> {
    try {
      const header = req.headers.authorization;

      if (header != undefined) {
        const bearer: string[] = header.split(' ');
        const token: string = bearer[1];

        jwt.verify(token, keySecret, (error: any) => {
          if (error) {
            return res.status(403).json({ message: 'Invalid token' });
          }
        });

        return next();
      } else {
        return res.status(401).json({ message: 'Token not found' });
      }
    } catch (error: any) {
      return res
        .status(500)
        .json({ message: 'Internal Server error. Try again' });
    }
  }
}
