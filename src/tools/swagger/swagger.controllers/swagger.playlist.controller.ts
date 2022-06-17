export {};
/**
 * @swagger
 * tags:
 *  name: Playlist
 *  description: API Playlist
 */

/**
 * @swagger
 * /playlist:
 *   get:
 *     summary: Retorna a lista de Playlist.
 *     description: Retorna a lista de playlist.
 *     tags:
 *       - Playlist
 *     responses:
 *       200:
 *         description: A list of playlists.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Playlist'
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
 * /playlist/{id}:
 *   get:
 *     summary: Retorna a playlist que corresponde ao ID informado
 *     tags:
 *      - Playlist
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the Playlist to retrieve.
 *         schema:
 *           type: string
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: Return a playlist if found.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Playlist'
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
 * /playlist:
 *   post:
 *     summary: Criando o usuário
 *     tags:
 *      - Playlist
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#components/schemas/Playlist"
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: Ok
 *         produces:
 *           - application/json
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
 * /playlist/{id}:
 *   put:
 *     summary: Update playlist
 *     tags:
 *      - Playlist
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the Playlist to retrieve.
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#components/schemas/Playlist"
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

/**
 * @swagger
 * /playlist/{id}:
 *   delete:
 *     summary: Deleta playlist
 *     tags:
 *      - Playlist
 *     produces:
 *      - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the Playlist to retrieve.
 *         schema:
 *           type: string
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
