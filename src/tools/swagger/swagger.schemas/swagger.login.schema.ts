export {};
/**
 * @swagger
 * components:
 *   schemas:
 *     Login:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: Email de usuário para login.
 *         password:
 *           type: string
 *           description: Senha do usuário.
 *       example:
 *          email: chico@okn.com.br
 *          password: 123
 */