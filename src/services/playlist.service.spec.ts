import AbstractBaseServiceTest from '../common/abstract.services/abstract.base.serviceTest';
import { Playlist } from '../models/entity/PlaylistModel';
import { PlaylistService } from './playlist.service';

export class PlaylistServiceTest extends AbstractBaseServiceTest<PlaylistService, Playlist> {}

describe('PlaylistService tests', () => {
  const playlistServiceTest = new PlaylistServiceTest(PlaylistService, Playlist);
  playlistServiceTest.init();
});
