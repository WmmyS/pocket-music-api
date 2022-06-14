import { MusicModel as Music } from '../models/entity/MusicModel';
import { AbstractBaseService } from '../common/abstract.services/abstract.base.service';

export class MusicService extends AbstractBaseService<Music> {
  entities: Music[] = [];
}
