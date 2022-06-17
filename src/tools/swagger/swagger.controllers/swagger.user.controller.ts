export {};
/**
 * @swagger
 * tags:
 *  name: User
 *  description: User entity operations
 */

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Users list.
 *     description: Returns a user list registered on system.
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
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
 * /user/{id}:
 *   get:
 *     summary: Returns a user with ID informed.
 *     tags:
 *      - User
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to retrieve.
 *         schema:
 *           type: string
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: Return a User if found.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
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
 * /user:
 *   post:
 *     summary: Create a user.
 *     tags:
 *      - User
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#components/schemas/User"
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
 * /user/{id}:
 *   put:
 *     summary: Update an user.
 *     tags:
 *      - User
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to retrieve.
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#components/schemas/User"
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
 * /user/{id}:
 *   delete:
 *     summary: Delete an user.
 *     tags:
 *      - User
 *     produces:
 *      - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to retrieve.
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
