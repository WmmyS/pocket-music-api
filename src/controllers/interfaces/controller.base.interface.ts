import { Request, Response } from 'express';

export interface ControllerBaseInterface {
  findAll(req: Request, res: Response): Promise<Response<JSON>>;

  findById(req: Request, res: Response, id: string): Promise<Response<JSON>> | Promise<unknown>;

  update(req: Request, res: Response): Promise<unknown>;

  insert(req: Request, res: Response): Promise<unknown>;

  delete(req: Request, res: Response): Promise<unknown>;
}
