import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongListComponent } from './song-list/song-list.component';
import {SongModule} from '../core/song/song.module';
import {SongService} from '../core/song/song.service';
import {RouterModule, Routes} from '@angular/router';
import {SongDetailsComponent} from '../song-details/song-details/song-details.component';

const routes: Routes = [
  { path: 'songs/details/:songUid', component: SongDetailsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SongModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SongService],
  declarations: [SongListComponent],
  exports: [SongListComponent]
})
export class SongListModule { }
