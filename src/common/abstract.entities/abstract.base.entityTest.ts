import { AbstractBaseEntity } from './abstract.base.entity';

export default abstract class AbstractBaseEntityTest<T extends AbstractBaseEntity> {
  sut: T;

  init() {
    it('should return same id property', () => {
      this.sut.id = 'testitshouldbeanid';
      expect(this.sut).toHaveProperty('id');
      expect(this.sut.id).toBeTruthy;
      expect(this.sut.id).not.toBe('string');
    });
  }
}
