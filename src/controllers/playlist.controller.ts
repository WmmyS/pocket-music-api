import { ControllerBaseInterface } from './interfaces/controller.base.interface';
import { PlaylistService } from '../services/playlist.service';
import { Request, Response } from 'express';

const playlistService = new PlaylistService();

/**
 * @swagger
 * tags:
 *  name: Playlist
 *  description: API Playlist
 */

export class PlaylistController implements ControllerBaseInterface {
  public url = 'playlist';

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
  async findAll(req: Request, res: Response): Promise<Response<JSON>> {
    const response = await playlistService.findAll();
    return res.status(200).json(response);
  }

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
  async findById(req: Request, res: Response): Promise<Response<JSON>> {
    let { id } = req.params;
    if (typeof id !== 'string') id = '0';

    const response = await playlistService.findById(id);
    if (typeof response === 'undefined') {
      res.status(404).json({ message: 'Record Not Found' });
    }

    return res.status(200).json(response);
  }

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
  async insert(req: Request, res: Response): Promise<unknown> {
    const body = req.body;
    const response = await playlistService.save(body);
    return res.status(200).json(response);
  }

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
  async update(req: Request, res: Response): Promise<unknown> {
    const body = req.body;
    const { id } = req.params;
    const response = await playlistService.update(id, body);
    if (typeof response === 'undefined') return res.status(404).json({ message: 'Record Not Found' });
    return res.status(200).json(response);
  }

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
  async delete(req: Request, res: Response): Promise<unknown> {
    const { id } = req.params;
    const response = await playlistService.delete(id);
    if (response === false) return res.status(404).json({ message: 'Record Not Found' });
    return res.status(200).json({ message: 'Record deleted succesfuly' });
  }
}
