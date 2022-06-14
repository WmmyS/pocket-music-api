import { ModelBaseInterface } from '../../models/entity/interfaces/model.base.interface';
import { AbstractBaseService } from './abstract.base.service';

export default abstract class AbstractBaseServiceTest<S extends AbstractBaseService<T>, T extends ModelBaseInterface> {
  constructor(protected service: new () => S, protected entityClass: new () => T) {}

  // System under test
  sut = new this.service();
  entity = new this.entityClass();

  init() {
    afterEach(() => (this.sut.entities = []));
    afterEach(() => jest.clearAllMocks());

    it('should validate saved entity', async () => {
      const savedEntity = this.sut.save(this.entity);
      await expect(this.sut.save(this.entity)).toBe(savedEntity);
      expect(savedEntity.id).not.toBe([null, undefined, '']);
    });

    it('should call console.log with confirmation message', async () => {
      const consoleSpy = jest.spyOn(console, 'log');
      await this.sut.save(this.entity);
      expect(consoleSpy).toHaveBeenCalledTimes(1);
      expect(consoleSpy).toHaveBeenCalledWith(`Entry ${this.entity} has been saved successfuly`);
    });

    it('should return an entity list', async () => {
      const entityList = await this.sut.findAll();
      expect(entityList).toStrictEqual([]);
      const savedEntity = this.sut.save(this.entity);
      expect(entityList).toStrictEqual([savedEntity]);
    });

    it('should update and return an entity', async () => {
      const savedEntity = await this.sut.save(this.entity);
      expect(savedEntity.id).not.toBeNull();
      const id = savedEntity.id ? 'string' : '';
      const updated = await this.sut.update(id, this.entity);
      expect(savedEntity).toEqual(updated);
    });

    it('should return undefined when not found id in update', async () => {
      expect(await this.sut.update('01', this.entity)).toBe(undefined);
    });

    it('should return an entity when found in findById', async () => {
      const savedEntity = await this.sut.save(this.entity);
      expect(savedEntity.id).not.toBeNull();
      const id: string = typeof savedEntity.id === 'string' ? savedEntity.id : '';
      const found = await this.sut.findById(id);
      expect(found).toEqual(savedEntity);
    });

    it('should return undefined when not found id in findById', async () => {
      expect(await this.sut.findById('01')).toBe(undefined);
    });
  }
}
