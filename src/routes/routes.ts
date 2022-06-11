import { Router } from 'express';
import { MusicController } from '../controllers/music.controller';
import { PlaylistController } from '../controllers/playlist.controller';
import { AuthenticationJWT } from '../middlewares/authentication-jwt';

const router = Router();
const playlistController = new PlaylistController();
const musicController = new MusicController();
const authentication = new AuthenticationJWT().authethentication;

/**
 * @swagger
 * tags:
 *   - name: User
 *     description: Operações do usuário
 */

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Criando o usuário
 *     description: Só pode ser feito por um usuário logado no sistema.
 *     tags:
 *      - User
 *     parameters:
 *       - name: username
 *         description: teste.
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/User'
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
 * /user/{username}:
 *   get:
 *     summary: Retorna o usuário pelo username dele
 *     tags:
 *      - User
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: Ok
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /user/login:
 *   get:
 *     summary: Loga o usuário no sistema
 *     tags:
 *      - User
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: Ok
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /user/logout:
 *   get:
 *     summary: Desloga o usuário no sistema
 *     tags:
 *      - User
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: Ok
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /user/{username}:
 *   put:
 *     summary: Atualiza o usuário
 *     description: Só pode ser feito por um usuário que esteja logado.
 *     tags:
 *      - User
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: Sucesso
 *       400:
 *         description: ID inválido
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /user/{username}:
 *   delete:
 *     summary: Deleta o usuário
 *     tags:
 *      - User
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
 * Playlist Routes
 */
router.get(
  `/api/${playlistController.url}`,
  authentication,
  playlistController.findAll,
);
router.get(
  `/api/${playlistController.url}/:id`,
  authentication,
  playlistController.findById,
);
router.post(
  `/api/${playlistController.url}`,
  authentication,
  playlistController.insert,
);
router.put(
  `/api/${playlistController.url}/:id`,
  authentication,
  playlistController.update,
);
router.delete(
  `/api/${playlistController.url}/:id`,
  authentication,
  playlistController.delete,
);

/**
 * Music Routes
 */
router.get(`/api/${musicController.url}`, musicController.findAll);
router.get(`/api/${musicController.url}/:id`, musicController.findById);
router.post(`/api/${musicController.url}`, musicController.insert);
router.put(`/api/${musicController.url}/:id`, musicController.update);
router.delete(`/api/${musicController.url}/:id`, musicController.delete);

export default router;
