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
 *     summary: Returns a playlist list.
 *     description: Returns a playlist list.
 *     tags:
 *       - Playlist
 *     responses:
 *       200:
 *         description: Succcess
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
 *     summary: Returns a playlist with informed ID.
 *     tags:
 *      - Playlist
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Playlist ID to retrieve.
 *         schema:
 *           type: string
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: Success
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
 *     summary: Create a new playlist.
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
 *         description: Success
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
 *     summary: Update a playlist
 *     tags:
 *      - Playlist
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Playlist ID to retrieve.
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
 *         description: Success
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
 *         description: Playlist ID to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unautorized
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal Server Error
 */
