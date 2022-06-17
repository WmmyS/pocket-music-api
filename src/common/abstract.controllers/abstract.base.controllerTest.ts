import { AbstractBaseEntity } from '../abstract.entities/abstract.base.entity';
import { AbstractBaseService } from '../abstract.services/abstract.base.service';
import { AbstractBaseController } from './abstract.base.Controller';

export abstract class AbstractBaseControllerTest<
  C extends AbstractBaseController<S, T>,
  S extends AbstractBaseService<T>,
  T extends AbstractBaseEntity,
> {
  // System under test
  protected sut: C;

  init() {
    it('should return code 200 and promise of entity list', async () => {
      const response = this.sut.findAll;
      console.log(response.bind);
    });
  }
}
