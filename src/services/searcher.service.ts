import { MusicModel as Music } from '../models/entity/music.model.entity';
import { Regexp } from '../utils/regexp/regexp';
import { Search } from '../utils/google.api/search';

export class Searcher {
  async search(search: string): Promise<any[]> {
    const result: any = await Search.search(search);
    const items: Array<any> = [];
    result.items.forEach(function (item: any) {
      if (item.pagemap.videoobject !== [] || item.pagemap.videoobject[0].genre === 'Music') {
        if (item.pagemap.videoobject !== [] || item.pagemap.videoobject[0] !== 'undefined') {
          // Maneira encontrada de trazer somente resultados de vídeos e não canais
          if (item.formattedUrl.startsWith('https://www.youtube.com/watch')) {
            const song: Music = {
              ytid: item.pagemap.videoobject[0].videoid,
              title: Regexp.regexpVideoTitle(item.title),
              author: typeof item.pagemap.person !== 'undefined' ? item.pagemap.person[0].name : null,
              description:
                typeof item.pagemap.videoobject !== 'undefined' ? item.pagemap.videoobject[0].description : null,
              url: item.formattedUrl,
              tambnail:
                typeof item.pagemap.videoobject !== 'undefined' ? item.pagemap.videoobject[0].thumbnailurl : null,
              time:
                typeof item.pagemap.videoobject !== 'undefined'
                  ? Regexp.regexpDuration(item.pagemap.videoobject[0].duration)
                  : '',
            };
            if (song.time !== undefined) {
              const timer = song.time.split(':');

              // Garante que as músicas resultantes sejam de duração menor de 1 hora
              if (Number.parseInt(timer[0]) > 0 && Number.parseInt(timer[0]) < 60 && Number.parseInt(timer[1]) > 29) {
                items.push(song);
              }
            }
          }
        }
      }
    });
    return items;
  }
}
