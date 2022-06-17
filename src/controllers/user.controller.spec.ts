import { AbstractBaseControllerTest } from '../common/abstract.controllers/abstract.base.controllerTest';
import { UserModel } from '../models/entity/user.model.entity';
import { UserService } from '../services/user.service';
import { UserController } from './user.controller';

export class UserControllerTest extends AbstractBaseControllerTest<UserController, UserService, UserModel> {
  sut = new UserController();
}

describe('UserController tests', () => {
  const userControllerTest = new UserControllerTest();
  userControllerTest.init();
});
