export {};
/**
 * @swagger
 * tags:
 *  name: Searcher
 *  description: Search on Youtube
 */

/**
 * @swagger
 * /search/{search}:
 *   get:
 *     summary: Return a music list found.
 *     description: Return a music list found.
 *     tags:
 *       - Searcher
 *     parameters:
 *       - in: path
 *         name: search
 *         required: true
 *         description: Search of music.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
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
