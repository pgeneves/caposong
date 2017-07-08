import { Component, OnInit } from '@angular/core';
import {SongService} from '../../core/song/song.service';

interface Song {
  uid: string;
  name: string;
}

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  songService: SongService;
  songs: Song[];
  loaded: Boolean;

  constructor(private songSvi: SongService) {
    this.songService = songSvi;
    this.loaded = false;
    this.songs = [];
  }

  ngOnInit() {
    this.refreshData();
    // debugger;
  }

  refreshData() {
    // this.songService.refreshSongList();
    this.songService.getSongListObservable().subscribe(result => this.populateData(result));
  }

  populateData(data) {
    this.songs = data;
    this.loaded = true;
  }
}
