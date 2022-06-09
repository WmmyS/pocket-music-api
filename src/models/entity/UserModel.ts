export class UserModel {
  private id?: number;
  private username?: string;
  private firstname?: string;
  private lastname?: string;
  private email?: string;
  private password?: string;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - id
 *         - username
 *         - firstname
 *         - lastname
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: number
 *           description: Id gerado automaticamente para o usuário.
 *         username:
 *           type: string
 *           description: Nome que o usuário escolheu para fazer o login.
 *         firstname:
 *           type: string
 *           description: Nome do usuário.
 *         lastname:
 *           type: string
 *           description: Sobrenome do usuário.
 *         email:
 *           type: string
 *           description: Email do usuário.
 *         password:
 *           type: string
 *           description: Senha do usuário.
 *       example:
 *          id: s5a16das56d1asda
 *          username: chico
 *          firstname: francisco
 *          lastname: chico
 *          email: chico@okn.com.br
 *          password: 123
 */
