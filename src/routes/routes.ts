import { Router } from 'express';
import { IndexController } from '../controllers/index.controller';

const router = Router();
const indexController = new IndexController();

/**
 * @swagger
 * tags:
 *   - name: Music
 *     description: Music
 */

/**
 * @swagger
 * /music:
 *   get:
 *     summary: Return Musics
 *     description: Retorna músicas
 *     id: musictest
 *     tags:
 *      - Music
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: Ok
 */

/**
 * @swagger
 * /music:
 *   post:
 *     summary: Persist Musics
 *     description: Persist musics.
 *     security: []
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
 */

/**
 * @swagger
 * /music:
 *   delete:
 *     summary: Delete Musics
 *     description: Delete musics
 *     id: musictest
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

/**
 * @swagger
 * components:
 *   schemas:
 *     Music:
 *       type: object
 *       required:
 *         - id
 *         - title
 *         - author
 *         - time
 *       properties:
 *         id:
 *           type: number
 *           description: The auto-generated id of the music.
 *         title:
 *           type: string
 *           description: The title of music.
 *         author:
 *           type: string
 *           description: Author name.
 *         time:
 *           type: string
 *           description: Time of music.
 *       example:
 *          title: Livin' On A Prayer
 *          author: Bon Jovi
 *          time: 4:08
 */
router.get('/index', indexController.getIndex);

export default router;
