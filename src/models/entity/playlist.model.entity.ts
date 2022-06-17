import { AbstractBaseEntity } from '../../common/abstract.entities/abstract.base.entity';
import { EntityBaseInterface } from '../../common/abstract.entities/interfaces/entity.base.interface';
import { MusicModel as Music } from './music.model.entity';

export class PlaylistModel extends AbstractBaseEntity {
  public name?: string;
  public gender?: string;
  public musics?: Music[];
}
