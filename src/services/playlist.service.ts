import { Playlist } from '../models/entity/PlaylistModel';
import { AbstractBaseService } from '../common/abstract.services/abstract.base.service';

export class PlaylistService extends AbstractBaseService<Playlist> {
  entities: Playlist[] = [];
}
