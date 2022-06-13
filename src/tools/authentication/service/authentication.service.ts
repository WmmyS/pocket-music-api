import { AbstractBaseService } from '../../../services/abstract.base.service';
import { LoginAuthentication as Login } from '../model/login.authentication';

export class AthenticationService extends AbstractBaseService<Login> {
  entities: Login[] = [];

  async getLoginByEmail(email: string, password: string): Promise<any> {
    if (this.getEntities().length === 0) return;
    for (const entity of this.entities) {
      if (entity.email === email && entity.password === password) return entity;
    }
    return;
  }
}
