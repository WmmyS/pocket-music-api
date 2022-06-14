import AbstractBaseServiceTest from '../common/abstract.services/abstract.base.serviceTest';
import { UserModel } from '../models/entity/UserModel';
import { UserService } from './user.service';

export class UserServiceTest extends AbstractBaseServiceTest<UserService, UserModel> {}

describe('UserService tests', () => {
  const userServiceTest = new UserServiceTest(UserService, UserModel);
  userServiceTest.init();
});
