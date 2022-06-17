import { EntityBaseInterface } from '../../../common/abstract.entities/interfaces/entity.base.interface';

export class LoginAuthentication implements EntityBaseInterface {
  public id?: string;
  public email?: string;
  public password?: string;
}
