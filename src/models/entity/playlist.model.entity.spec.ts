import AbstractBaseEntityTest from '../../common/abstract.entities/abstract.base.entityTest';
import { PlaylistModel } from './playlist.model.entity';

export class PlaylistEntityTest extends AbstractBaseEntityTest<PlaylistModel> {
  sut = new PlaylistModel();
}

describe('PlalystEntity test', () => {
  const playlistEntityTest = new PlaylistEntityTest();
  playlistEntityTest.init();
});
