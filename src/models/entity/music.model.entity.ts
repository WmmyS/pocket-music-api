import { AbstractBaseEntity } from '../../common/abstract.entities/abstract.base.entity';
import { PlaylistModel as Playlist } from './playlist.model.entity';

export class MusicModel extends AbstractBaseEntity {
  public ytid?: string;
  public title?: string;
  public author?: string;
  public description?: string;
  public url?: string;
  public tambnail?: string;
  public time?: string;
  public playlists?: Playlist[];
}
