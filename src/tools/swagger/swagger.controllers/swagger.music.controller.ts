export {};
/**
 * @swagger
 * tags:
 *  name: Music
 *  description: API Music
 */

/**
 * @swagger
 * /music:
 *   get:
 *     summary: Retorna as todas as Músicas.
 *     description: Retorna as todas especificações das Músicas.
 *     tags:
 *       - Music
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Music'
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
 * /music/{id}:
 *   get:
 *     summary: Retorna a música que corresponde ao ID informado
 *     tags:
 *      - Music
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: Sucesso
 *       400:
 *         description: ID inválido
 *       404:
 *         description: Música não encontrada
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /music:
 *   post:
 *     summary: Adicionando uma música
 *     tags:
 *      - Music
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#components/schemas/Music"
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: OK
 *       405:
 *         description: Entrada inválida
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /music:
 *   put:
 *     summary: Atualiza ID da música
 *     tags:
 *      - Music
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: Sucesso
 *       400:
 *         description: ID inválido
 *       404:
 *         description: Música não encontrada
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /music/{id}:
 *   delete:
 *     summary: Deleta música
 *     tags:
 *      - Music
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: Ok
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unautorized
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal Server Error
 */
