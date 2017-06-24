import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SongListModule} from './song-list/song-list.module';
import {SongDetailsModule} from './song-details/song-details.module';
import {CoreModule} from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SongListModule,
    SongDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
