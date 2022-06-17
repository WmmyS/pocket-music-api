import AbstractBaseServiceTest from '../common/abstract.services/abstract.base.serviceTest';
import { MusicModel } from '../models/entity/music.model.entity';
import { MusicService } from './music.service';

export class MusicServiceTest extends AbstractBaseServiceTest<MusicService, MusicModel> {}

describe('MusicService tests', () => {
  const musicServiceTest = new MusicServiceTest(MusicService, MusicModel);
  musicServiceTest.init();
});
