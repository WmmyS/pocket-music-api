import { AbstractBaseService } from '../common/abstract.services/abstract.base.service';
import { UserModel as User } from '../models/entity/user.model.entity';

export class UserService extends AbstractBaseService<User> {
  entities: User[] = [];
}
