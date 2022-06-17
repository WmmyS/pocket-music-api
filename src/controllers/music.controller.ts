import { MusicService } from '../services/music.service';
import { AbstractBaseController } from '../common/abstract.controllers/abstract.base.Controller';
import { MusicModel } from '../models/entity/music.model.entity';

export class MusicController extends AbstractBaseController<MusicService, MusicModel> {
  service = new MusicService();
}
