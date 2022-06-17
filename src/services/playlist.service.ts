import { PlaylistModel } from '../models/entity/playlist.model.entity';
import { AbstractBaseService } from '../common/abstract.services/abstract.base.service';

export class PlaylistService extends AbstractBaseService<PlaylistModel> {
  entities: PlaylistModel[] = [];
}
