import { Component, OnInit } from '@angular/core';
import {TranslateService} from '../../core/translate/translate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  titleLabel = 'Caposong';
  creditsLabel = 'pgeneves';
  translateService: TranslateService;

  constructor(private translateSvi: TranslateService) {
    this.translateService = translateSvi;
  }

  ngOnInit() {
    this.translateService.loadAllLang();
    this.translateService.storeFirstLangData();
  }
}
