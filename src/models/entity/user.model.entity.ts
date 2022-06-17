import { AbstractBaseEntity } from '../../common/abstract.entities/abstract.base.entity';

export class UserModel extends AbstractBaseEntity {
  private username?: string;
  private firstname?: string;
  private lastname?: string;
  private email?: string;
  private password?: string;
}
