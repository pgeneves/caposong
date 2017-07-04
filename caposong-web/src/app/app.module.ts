import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SongListModule} from './song-list/song-list.module';
import {SongDetailsModule} from './song-details/song-details.module';
import {CoreModule} from './core/core.module';
import {TranslateModule} from './core/translate/translate.module';
import {HeaderModule} from './header/header.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SongListModule,
    SongDetailsModule,
    HttpModule,
    TranslateModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
