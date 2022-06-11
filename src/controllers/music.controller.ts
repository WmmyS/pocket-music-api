import { ControllerBaseInterface } from './interfaces/controller.base.interface';
import { MusicService } from '../services/music.service';
import { Request, Response } from 'express';

const musicService = new MusicService();

/**
 * @swagger
 * tags:
 *  name: Music
 *  description: API Music
 */

export class MusicController implements ControllerBaseInterface {
  public url = 'music';
  async findAll(req: Request, res: Response): Promise<Response<JSON>> {
    const response = await musicService.findAll();
    return res.status(200).json(response);
  }
  /**
   * @swagger
   * /music:
   *   get:
   *     summary: Retorna as todas as Músicas.
   *     description: Retorna as todas especificações das Músicas.
   *     tags:
   *       - Music
   *     responses:
   *       200:
   *         description: Sucesso
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

  async findById(req: Request, res: Response): Promise<Response<JSON>> {
    let { id } = req.params;
    if (typeof id !== 'string') id = '0';

    const response = await musicService.findById(id);
    if (typeof response === 'undefined') {
      res.status(404).json({ message: 'Record Not Found' });
    }

    return res.status(200).json(response);
  }
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
   *       500:
   *         description: Internal Server Error
   */

  async insert(req: Request, res: Response): Promise<any> {
    const body = req.body;
    const response = await musicService.insert(body);
    return res.status(200).json(response);
  }
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
   *       500:
   *         description: Internal Server Error
   */

  async update(req: Request, res: Response): Promise<any> {
    const body = req.body;
    const { id } = req.params;
    const response = await musicService.update(id, body);
    if (typeof response === 'undefined') {
      return res.status(404).json({ message: 'Record Not Found' });
      return res.status(200).json(response);
    }
  }
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
   *       500:
   *         description: Internal Server Error
   */

  async delete(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const response = await musicService.delete(id);
    if (response === false) {
      return res.status(404).json({ message: 'Record Not Found' });
      return res.status(200).json({ message: 'Record deleted succesfuly' });
    }
  }
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
}
