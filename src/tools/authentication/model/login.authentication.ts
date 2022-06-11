import { ModelBaseInterface } from '../../../models/entity/interfaces/model.base.interface';

export class LoginAuthentication implements ModelBaseInterface {
  public id?: string;
  public email?: string;
  public password?: string;
}
