import fs = require('fs');
import ytdl = require('ytdl-core');

class MP3Module {
  constructor(url: string, name: string) {
    this.url = url;
    this.name = name;
    this.ytdl = ytdl(this.url);
  }

  private url: string;
  private name: string;
  private ytdl: any;

  async convertMP3Music() {
    this.ytdl.pipe(fs.createWriteStream(`/music/${this.name}.mp3`));
  }
}

module.exports = MP3Module;
