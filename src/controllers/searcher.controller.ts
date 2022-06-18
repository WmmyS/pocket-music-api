import { Request, Response } from 'express';
import { Searcher } from '../services/searcher.service';

export class SearcherController {
  search = async (req: Request, res: Response) => {
    const { search } = req.params;
    const searcher = new Searcher();
    const result = await searcher.search(search);

    if (typeof result === 'undefined') res.status(500).json({ message: 'Error to find results on Youtube' });

    return res.status(200).json(result);
  };
}
