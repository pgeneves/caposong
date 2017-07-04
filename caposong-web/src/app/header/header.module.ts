import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {TranslateModule} from '../core/translate/translate.module';
import {TranslateService} from '../core/translate/translate.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  providers: [TranslateService],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
