import AbstractBaseServiceTest from '../common/abstract.services/abstract.base.serviceTest';
import { PlaylistModel } from '../models/entity/playlist.model.entity';
import { PlaylistService } from './playlist.service';

export class PlaylistServiceTest extends AbstractBaseServiceTest<PlaylistService, PlaylistModel> {}

describe('PlaylistService tests', () => {
  const playlistServiceTest = new PlaylistServiceTest(PlaylistService, PlaylistModel);
  playlistServiceTest.init();
});
