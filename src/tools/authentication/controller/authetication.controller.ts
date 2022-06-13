import { Request, Response } from 'express';
import { AthenticationService } from '../service/authentication.service';
import { AuthenticationJWT } from '../../../middlewares/authentication-jwt';

const authenticationService = new AthenticationService();
const autenticationJWT = new AuthenticationJWT();

export class AuthenticationController {
  public url = 'authentication';

  /**
   * @swagger
   * /authentication/register:
   *   post:
   *     summary: Registro de usuário para login no sistema
   *     tags:
   *      - Authentication
   *     produces:
   *      - application/json
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             $ref: "#components/schemas/Login"
   *     responses:
   *       200:
   *         description: Return success with user registered.
   *       produces:
   *         - application/json
   *       400:
   *         description: Bad Request
   *       401:
   *         description: Unautorized
   *       404:
   *         description: Not found
   *       500:
   *         description: Internal Server Error
   */
  async registerLogin(req: Request, res: Response): Promise<any> {
    const { email, password } = req.body;

    console.log(`email: ${email}, password: ${password}`);
    try {
      const loginInserted = await authenticationService.insert({
        email: email,
        password: password,
      });

      if (typeof loginInserted === 'undefined')
        return res.status(500).json({ message: 'Internal server error' });

      console.log('salvei');
      const token = autenticationJWT.generateToken(loginInserted);
      res.status(200).json({ token: `Bearer ${token}` });
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * @swagger
   * /authentication:
   *   post:
   *     summary: Entrada de usuário para login no sistema
   *     tags:
   *      - Authentication
   *     produces:
   *      - application/json
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             $ref: "#components/schemas/Login"
   *     responses:
   *       200:
   *         description: Return user token.
   *         content:
   *           application/json:
   *             schema:
   *               type: string
   *       produces:
   *         - application/json
   *       400:
   *         description: Bad Request
   *       401:
   *         description: Unautorized
   *       404:
   *         description: Not found
   *       500:
   *         description: Internal Server Error
   */
  async authentication(req: Request, res: Response): Promise<any> {
    const { email, password } = req.body;

    const login = await authenticationService.getLoginByEmail(email, password);

    if (typeof login === 'undefined')
      return res.status(401).json({ message: 'Invalid email or password' });

    const token = autenticationJWT.generateToken(login);
    return (res.status(200).json({ token: token }).statusMessage =
      'Login succesfuly completed');
  }
}
