import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongDetailsComponent } from './song-details/song-details.component';
import {Routes} from '@angular/router';
import {SongListComponent} from '../song-list/song-list/song-list.component';
import {TranslateModule} from '../core/translate/translate.module';
import {TranslateService} from '../core/translate/translate.service';

const routes: Routes = [
  { path: 'songs', component: SongListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [SongDetailsComponent],
  providers: [TranslateService]

})
export class SongDetailsModule { }
