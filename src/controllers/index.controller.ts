import { Request, Response } from 'express';
import { IndexService } from '../services/index.service';
import { InterfaceBaseController } from './interfaces/controller.interface';

const indexService = new IndexService();

/**
 * @swagger
 * tags:
 *  name: Index
 *  description: API Index
 */
export class IndexController implements InterfaceBaseController {
  findAll() {
    throw new Error('Method not implemented.');
  }

  findById() {
    throw new Error('Method not implemented.');
  }

  update() {
    throw new Error('Method not implemented.');
  }

  insert() {
    throw new Error('Method not implemented.');
  }

  delete() {
    throw new Error('Method not implemented.');
  }

  getIndex(req: Request, res: Response) {
    const response = indexService.getIndexReturn();
    res.status(200).json(response);
  }
}
