import { RecordNotFoundException } from '../../utils/exceptions/record.not.found.exception';

export interface ServiceBaseInterface<T> {
  findAll(): Promise<T[]>;

  findById(id: string): T | RecordNotFoundException;

  insert(entity: T): T;

  update(id: string, entity: T): T | RecordNotFoundException;

  delete(id: string): void | RecordNotFoundException;
}
