import { AbstractBaseEntity } from '../../common/abstract.entities/abstract.base.entity';

export class MusicModel extends AbstractBaseEntity {
  private title?: string;
  private author?: string;
  private time?: string;
}
