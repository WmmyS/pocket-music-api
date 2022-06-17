import { ServiceBaseInterface } from './interfaces/service.base.interface';
import { v4 } from 'uuid';
import { AbstractBaseEntity } from '../abstract.entities/abstract.base.entity';

export abstract class AbstractBaseService<T extends AbstractBaseEntity> implements ServiceBaseInterface<T> {
  abstract entities: T[];

  getEntities(): T[] {
    return this.entities;
  }

  public findAll = async () => {
    return await this.getEntities();
  };

  findById(id: string): T | undefined {
    if (this.getEntities().length === 0) return;
    for (const entity of this.getEntities()) {
      if (entity.id === id) return entity;
    }
    return;
  }

  save(entry: T): T {
    entry.id = v4();
    this.getEntities().push(entry);
    console.log(`Entry ${entry} has been saved successfuly`);
    return entry;
  }

  update(id: string, entry: T): T | undefined {
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
