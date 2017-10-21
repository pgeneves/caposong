import { Component, OnInit } from '@angular/core';
import {SongService} from '../../core/song/song.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '../../core/translate/translate.service';
import { Subscription } from 'rxjs/Subscription';

interface Translate {
  lang: String;
  lyrics: String[];
}

interface Song {
  title: string;
  name: String;
  uid: String;
  lyrics: String[];
  translate: Translate[];
}

var EmptySong = {
  title: '',
  name: '',
  uid: '',
  lyrics: [],
  translate: []
}

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.css']
})

export class SongDetailsComponent implements OnInit {
  translateService: TranslateService;
  songService: SongService;
  song: Song;
  sentences: string[];
  songUid: String;
  loaded: Boolean;
  currentLang: String;
  langSubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router, private translateSvi: TranslateService, private songSvi: SongService) {
    this.translateService = translateSvi;
    this.songService = songSvi;
    this.song = EmptySong;
    this.sentences = [];
    this.loaded = false;
    this.songUid = '';
    this.currentLang = '';
    this.langSubscription = null;
  }

  ngOnInit() {
    // Only because we not navigate directly to another details
    // The right way is to use Observable on parameters
    this.songUid = this.route.snapshot.paramMap.get('songUid');

    // Subscribe on language changes
    this.langSubscription = this.translateService.curLangObs$
          .subscribe(lang => this.applyLang(lang))

    this.refreshData();
  }

  ngOnDestroy() {
    this.langSubscription.unsubscribe();
  }

  refreshData() {
    this.songService.getSongLyricsObservable(this.songUid).subscribe(result => this.populateData(result));
  }

  populateData(data) {
    this.song = data;
    this.loaded = true;
    this.ngOnChanges();
  }

  ngOnChanges() {
    if (this.song != null) {
      this.formatSongData(this.song);
    } else {
        let songTranslate = [];
        this.sentences = [];
    }
  }

  applyLang(lang: String) {
    this.currentLang = lang
    this.ngOnChanges();
  }

  formatSongData = function(song: Song) {
    let songTranslate = [];
    this.sentences = [];
    // Get current translation
    const translates = this.song.translate;
    for (let i = 0; i < translates.length; i++) {
      if (translates[i].lang === this.currentLang) {
        songTranslate = translates[i].lyrics;
      }
    }
    // Compose view data
    for (let i = 0; i < this.song.lyrics.length; i++) {
      const lyr = this.song.lyrics[i];
      let trn = '';
      if (i < songTranslate.length) {
        trn = songTranslate[i];
      }
      this.sentences.push([lyr, trn]);
    }
  }
}
