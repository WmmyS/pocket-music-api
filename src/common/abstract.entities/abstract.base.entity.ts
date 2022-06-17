import { EntityBaseInterface } from './interfaces/entity.base.interface';

export abstract class AbstractBaseEntity implements EntityBaseInterface {
  id?: string;
}
