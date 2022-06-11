import { Playlist } from '../models/entity/PlaylistModel';
import { AbstractBaseService } from './abstract.base.service';

export class PlaylistService extends AbstractBaseService<Playlist> {
  entities: Playlist[] = [];
}
