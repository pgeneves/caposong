import {Component, Input, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TranslateService} from '../../core/translate/translate.service';

interface Lang {
  key: string;
  label: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  titleLabel = 'Caposong';
  creditsLabel = 'pgeneves';
  translateService: TranslateService;
  _selectedLang: string;
  allLangs: Lang[];

  constructor(private translateSvi: TranslateService, private forms: FormsModule) {
    this.translateService = translateSvi;
    this.allLangs = translateSvi.getAvailableLang();
    this._selectedLang = this.translateService.getCurrentLang();
  }

  ngOnInit() {
    this.translateService.loadAllLang();
    this.translateService.storeFirstLangData();
  }

  @Input()
  set selectedLang(key: string) {
    this._selectedLang = key;
    this.translateService.setCurrentLang(key);
  }

  get selectedLang(): string { return this._selectedLang; }
}
