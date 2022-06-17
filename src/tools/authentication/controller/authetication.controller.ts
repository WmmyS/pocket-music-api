import { Request, Response } from 'express';
import { AthenticationService } from '../service/authentication.service';
import { AuthenticationJWT } from '../../../middlewares/authentication-jwt';

const authenticationService = new AthenticationService();
const autenticationJWT = new AuthenticationJWT();

export class AuthenticationController {
  public url = 'authentication';

  async registerLogin(req: Request, res: Response): Promise<unknown> {
    const { email, password } = req.body;

    console.log(`email: ${email}, password: ${password}`);
    try {
      const loginInserted = await authenticationService.save({
        email: email,
        password: password,
      });

      if (typeof loginInserted === 'undefined') return res.status(500).json({ message: 'Internal server error' });

      console.log('salvei');
      const token = autenticationJWT.generateToken(loginInserted);
      res.status(200).json({ token: `Bearer ${token}` });
    } catch (error) {
      console.log(error);
    }
  }

  async authentication(req: Request, res: Response): Promise<unknown> {
    const { email, password } = req.body;

    const login = await authenticationService.getLoginByEmail(email, password);

    if (typeof login === 'undefined') return res.status(401).json({ message: 'Invalid email or password' });

    const token = autenticationJWT.generateToken(login);
    return (res.status(200).json({ token: token }).statusMessage = 'Login succesfuly completed');
  }
}
