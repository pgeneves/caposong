import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from './translate/translate.module';
import { SongModule } from './song/song.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SongModule
  ],
  declarations: []
})
export class CoreModule { }
