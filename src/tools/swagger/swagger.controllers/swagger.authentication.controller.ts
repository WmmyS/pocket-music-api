export {};
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
