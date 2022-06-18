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
 *     summary: Return all musics.
 *     description: Return all musics specifications.
 *     tags:
 *       - Music
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

/**
 * @swagger
 * /music/{id}:
 *   get:
 *     summary: Return music with informed ID.
 *     tags:
 *      - Music
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Music not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /music:
 *   post:
 *     summary: Inser a music on system
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
 *         description: Success
 *       405:
 *         description: Invalid entry
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /music:
 *   put:
 *     summary: Update a music by ID
 *     tags:
 *      - Music
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Music not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /music/{id}:
 *   delete:
 *     summary: Delete an úsic by informed ID
 *     tags:
 *      - Music
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
