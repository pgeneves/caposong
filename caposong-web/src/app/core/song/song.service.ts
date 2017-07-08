import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';

@Injectable()
export class SongService {
  private songList = null;

  constructor(public http: Http) {
    this.songList = null;
  }

  refreshSongList() {
    this.http.get('/song-data/list')
      .catch(this.ignoreError)
      .subscribe(result => this.songList = result);
  }

  getSongListObservable() {
    return this.http.get('/song-data/list')
      .map(result => result.json())
      .catch(this.ignoreError);
  }

  getSongLyricsObservable(songUid: String) {
    return this.http.get('/song-data/get?uid=' + songUid)
      .map(result => result.json())
      .catch(this.ignoreError);
  }

  // storeData(lang: Lang) {
  //   this.getLangFile(lang.key).subscribe(result => {this.cachedText[lang.key] = result});
  // }
  //
  // storeFirstLangData() {
  //   this.storeLangData(this.allLang[0]);
  // }
  //
  //
  // getLangFile(lang: string): Observable<Map<string, string>> {
  //   return this.http.get('/assets/lang/text_' + lang + '.json')
  //     .map(this.extractData)
  //     .catch(this.ignoreError);
  // }
  //
  // private extractData(res: Response) {
  //   const body = res.json();
  //   return body.data || { };
  // }

  private ignoreError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.from([{}]);
  }

}
