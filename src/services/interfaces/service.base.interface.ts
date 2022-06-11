export interface ServiceBaseInterface<T> {
  getEntities(): T[];

  findAll(): Promise<T[]>;

  findById(id: string): T | any;

  insert(entity: T): T;

  update(id: string, entity: T): T | any;

  delete(id: string): boolean;
}
