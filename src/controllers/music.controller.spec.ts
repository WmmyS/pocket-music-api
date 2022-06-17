import { AbstractBaseControllerTest } from '../common/abstract.controllers/abstract.base.controllerTest';
import { MusicModel } from '../models/entity/music.model.entity';
import { MusicService } from '../services/music.service';
import { MusicController } from './music.controller';

export class MusicControllerTest extends AbstractBaseControllerTest<MusicController, MusicService, MusicModel> {
  sut = new MusicController();
}

describe('MusicController tests', () => {
  const musicControllerTest = new MusicControllerTest();
  musicControllerTest.init();
});
