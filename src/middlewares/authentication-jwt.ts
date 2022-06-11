import jwt from 'jsonwebtoken';
import { Login } from '../models/entity/LoginModel';
import { Request, Response } from 'express';

export class AuthenticationJWT {
  keyScret = 'senhaAleatoria';

  generateToken(login: Login) {
    let token = '';
    try {
      token = jwt.sign(
        { admin_id: login.id, login: login.login },
        this.keyScret,
        { expiresIn: '720h' },
      );
      console.log('Token generated for ' + login.login);
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

        jwt.verify(token, this.keyScret, (error: any, data: any) => {
          if (error) {
            return res.status(403).json({ message: 'Invalid token' });
          }
        });

        return next();
      } else {
        return res.status(401).json({ message: 'No token passed' });
      }
    } catch (error: any) {
      return res
        .status(500)
        .json({ message: 'Internal Server error. Try again' });
    }
  }
}
