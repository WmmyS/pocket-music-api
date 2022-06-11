import { Request, Response } from 'express';

export interface ControllerBaseInterface {
  findAll(req: Request, res: Response): Promise<Response<JSON>>;

  findById(
    req: Request,
    res: Response,
    id: string,
  ): Promise<Response<JSON>> | Promise<any>;

  update(req: Request, res: Response): Promise<any>;

  insert(req: Request, res: Response): Promise<any>;

  delete(req: Request, res: Response): Promise<any>;
}
