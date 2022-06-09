import { Request, Response } from 'express';

export interface ControllerBaseInterface<T> {
  findAll(req: Request, res: Response): Promise<Response<JSON>>;

  findById(): T;

  update(): T;

  insert(): T;

  delete(id: string): void;
}
