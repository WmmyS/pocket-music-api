import { Router } from 'express';
import { PlaylistController } from '../controllers/playlist.controller';

const router = Router();
const playlistController = new PlaylistController();

/**
 * @swagger
 * tags:
 *   - name: Music
 *     description: Operações da música
 */

/**
 * @swagger
 * /music:
 *   get:
 *     summary: Retorna as músicas
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
 *         description: Usuário não encontrada
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
router.get(`/api/${playlistController.url}`, playlistController.findAll);
router.get(`/api/${playlistController.url}:id`, playlistController.findById);
router.post(`/api/${playlistController.url}`, playlistController.insert);
router.put(`/api/${playlistController.url}:id`, playlistController.update);
router.delete(`/api/${playlistController.url}:id`, playlistController.delete);

export default router;
