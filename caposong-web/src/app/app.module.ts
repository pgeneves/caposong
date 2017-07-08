import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SongListModule} from './song-list/song-list.module';
import {SongDetailsModule} from './song-details/song-details.module';
import {CoreModule} from './core/core.module';
import {TranslateModule} from './core/translate/translate.module';
import {HeaderModule} from './header/header.module';
import {RouterModule, Routes} from '@angular/router';
import {SongListComponent} from './song-list/song-list/song-list.component';

const routes: Routes = [
  { path: '',  redirectTo: '/songs', pathMatch: 'full' },
  { path: 'songs', component: SongListComponent, pathMatch: 'full' },
];

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
    HeaderModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
