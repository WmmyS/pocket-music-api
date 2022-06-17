import { PlaylistService } from '../services/playlist.service';
import { AbstractBaseController } from '../common/abstract.controllers/abstract.base.Controller';
import { PlaylistModel } from '../models/entity/playlist.model.entity';

export class PlaylistController extends AbstractBaseController<PlaylistService, PlaylistModel> {
  service = new PlaylistService();
}
