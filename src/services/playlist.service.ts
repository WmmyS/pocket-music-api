import { Playlist } from '../models/entity/PlaylistModel';
import { RecordNotFoundException } from '../utils/exceptions/record.not.found.exception';
import { ServiceBaseInterface } from './interfaces/service.base.interface';

export class PlaylistService implements ServiceBaseInterface<Playlist> {
  private playlists: Playlist[] = [];

  async findAll(): Promise<Playlist[]> {
    return await this.playlists;
  }

  findById(id: string): Playlist | RecordNotFoundException {
    for (const playlist of this.playlists) {
      if (playlist.id === id) return playlist;
    }
    return new RecordNotFoundException();
  }
  insert(): Playlist {
    throw new Error('Method not implemented.');
  }
  update(): Playlist {
    throw new Error('Method not implemented.');
  }
  delete(): void {
    throw new Error('Method not implemented.');
  }
}
