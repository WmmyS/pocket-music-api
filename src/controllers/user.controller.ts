import { AbstractBaseController } from '../common/abstract.controllers/abstract.base.Controller';
import { UserModel } from '../models/entity/user.model.entity';
import { UserService } from '../services/user.service';

export class UserController extends AbstractBaseController<UserService, UserModel> {
  service = new UserService();
}
