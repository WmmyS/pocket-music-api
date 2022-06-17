import { AbstractBaseControllerTest } from '../common/abstract.controllers/abstract.base.controllerTest';
import { PlaylistModel } from '../models/entity/playlist.model.entity';
import { PlaylistService } from '../services/playlist.service';
import { PlaylistController } from './playlist.controller';

export class PlaylistControllerTest extends AbstractBaseControllerTest<
  PlaylistController,
  PlaylistService,
  PlaylistModel
> {
  sut = new PlaylistController();
}

describe('PlaylistController tests', () => {
  const playlistControllerTest = new PlaylistControllerTest();
  playlistControllerTest.init();
});
