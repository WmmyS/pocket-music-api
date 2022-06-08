import { Request, Response } from 'express';

export class IndexController {
  getIndex(req: Request, res: Response) {
    res.status(200).json({ result: 'Deu certo meu bom' });
  }
}
