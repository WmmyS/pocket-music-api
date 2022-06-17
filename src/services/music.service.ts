import { MusicModel as Music } from '../models/entity/music.model.entity';
import { AbstractBaseService } from '../common/abstract.services/abstract.base.service';

export class MusicService extends AbstractBaseService<Music> {
  entities: Music[] = [];
}
