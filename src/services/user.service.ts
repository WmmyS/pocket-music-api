import { AbstractBaseService } from '../common/abstract.services/abstract.base.service';
import { UserModel as User } from '../models/entity/UserModel';

export class UserService extends AbstractBaseService<User> {
  entities: User[] = [];
}
