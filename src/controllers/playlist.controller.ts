import { ControllerBaseInterface } from './interfaces/controller.base.interface';
import { Playlist } from '../models/entity/PlaylistModel';
import { PlaylistService } from '../services/playlist.service';
import { Request, Response } from 'express';

const playlistService = new PlaylistService();

/**
 * @swagger
 * tags:
 *  name: Playlist
 *  description: API Playlist
 */
export class PlaylistController implements ControllerBaseInterface<Playlist> {
  public url = 'playlist';

  /**
   * @swagger
   * /playlist:
   *   get:
   *     summary: Retorna a lista de Playlist.
   *     description: Retorna a lista de playlist.
   *     tags:
   *       - Playlist
   *     produces:
   *      - application/json
   *     responses:
   *       200:
   *         description: A list of users.
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Playlist'
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
  findById(): Playlist {
    throw new Error('Method not implemented.');
  }

  /**
   * @swagger
   * /playlist:
   *   post:
   *     summary: Criando o usuário
   *     security: []
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
   *       400:
   *         description: Bad Request
   *       401:
   *         description: Unautorized
   *       404:
   *         description: Not found
   *       500:
   *         description: Internal Server Error
   */
  insert(): Playlist {
    console.log('inserted playlist');
    throw new Error('Method not implemented.');
  }

  /**
   * @swagger
   * /playlist:
   *   put:
   *     summary: Update playlist
   *     tags:
   *      - Playlist
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
  update(): Playlist {
    console.log('updated playlist');
    throw new Error('Method not implemented.');
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
   *       - id:
   *         name: id
   *         in: query
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
  delete(id: string) {
    console.log('deletado ' + id);
    throw new Error('Method not implemented.');
  }
}
