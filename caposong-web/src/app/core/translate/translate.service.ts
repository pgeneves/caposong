import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';

interface Lang {
  key: string;
  label: string;
}

@Injectable()
export class TranslateService {
  private allLang: Lang[] = [{key: 'fr', label: 'Français'}, {key: 'en', label: 'English'}, {key: 'pt', label: 'Portuguêse'}];
  private curLangKey = 'pt';
  private langMap: Map<string, string>;
  private cachedText:  Map<string, Map<string, string>>;

  constructor (private http: Http) {
    this.loadAllLang();
  }

  loadAllLang() {
    Observable.from(this.allLang).map(this.storeLangData)
  }

  storeLangData(lang: Lang) {
    this.getLangFile(lang.key).map((data: Map<string, string>) => {this.cachedText[lang.key] = data});
  }

  getLangFile(lang: string): Observable<Map<string, string>> {
    return this.http.get('/lang/text_' + lang + '.json')
      .map(this.extractData)
      .catch(this.ignoreError);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || { };
  }

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

  // private handleError (error: Response | any) {
  //   let errMsg: string;
  //   if (error instanceof Response) {
  //     const body = error.json() || '';
  //     const err = body.error || JSON.stringify(body);
  //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   console.error(errMsg);
  //   return Observable.throw(errMsg);
  // }
}
