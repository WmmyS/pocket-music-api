import { ControllerBaseInterface } from './interfaces/controller.base.interface';
import { AbstractBaseService } from '../abstract.services/abstract.base.service';
import { Request, Response } from 'express';
import { AbstractBaseEntity } from '../abstract.entities/abstract.base.entity';

export abstract class AbstractBaseController<S extends AbstractBaseService<T>, T extends AbstractBaseEntity>
  implements ControllerBaseInterface
{
  protected service: S;

  findAll = async (req: Request, res: Response) => {
    const response = await this.service.findAll();
    return res.status(200).json(response);
  };

  findById = async (req: Request, res: Response) => {
    let { id } = req.params;
    if (typeof id !== 'string') id = '0';

    const response = await this.service.findById(id);
    if (typeof response === 'undefined') {
      res.status(404).json({ message: 'Record Not Found' });
    }

    return res.status(200).json(response);
  };

  insert = async (req: Request, res: Response) => {
    const body = req.body;
    const response = await this.service.save(body);
    return res.status(200).json(response);
  };

  update = async (req: Request, res: Response) => {
    const body = req.body;
    const { id } = req.params;
    const response = await this.service.update(id, body);
    if (typeof response === 'undefined') return res.status(404).json({ message: 'Record Not Found' });
    return res.status(200).json(response);
  };

  delete = async (req: Request, res: Response) => {
    const { id } = req.params;
    const response = await this.service.delete(id);
    if (response === false) return res.status(404).json({ message: 'Record Not Found' });
    return res.status(200).json({ message: 'Record deleted succesfuly' });
  };
}
