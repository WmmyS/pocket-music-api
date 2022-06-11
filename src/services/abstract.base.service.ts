import { ServiceBaseInterface } from './interfaces/service.base.interface';
import { ModelBaseInterface } from '../models/entity/interfaces/model.base.interface';

export abstract class AbstractBaseService<T extends ModelBaseInterface>
  implements ServiceBaseInterface<T>
{
  abstract entities: T[];

  getEntities(): T[] {
    return this.entities;
  }

  async findAll(): Promise<T[]> {
    return await this.getEntities();
  }

  findById(id: string): T | any {
    if (this.getEntities().length === 0) return;
    for (const entity of this.getEntities()) {
      if (entity.id === id) return entity;
    }
    return;
  }

  insert(entry: T): T {
    entry.id = (this.getEntities().length + 1).toString();
    this.getEntities().push(entry);
    return entry;
  }

  update(id: string, entry: T): T | any {
    if (this.getEntities().length === 0) return;
    for (let i = 0; i < this.getEntities().length; i++) {
      if (this.getEntities()[i].id === id) {
        entry.id = this.getEntities()[i].id;
        this.getEntities()[i] = entry;
      }
    }
    if (typeof entry.id === 'undefined') return;
    return entry;
  }

  delete(id: string): boolean {
    const index = this.getEntities().findIndex((value) => value.id === id);
    if (index === -1) return false;
    this.getEntities().splice(index, 1);
    console.log(this.getEntities());
    return true;
  }
}
