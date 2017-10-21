webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <app-header></app-header>\n  <div class=\"view-container\">\n    <div ng-view class=\"view-frame\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n  <div>Angular4 - Spring boot - Android App / pgeneves 2017</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__song_list_song_list_module__ = __webpack_require__("../../../../../src/app/song-list/song-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__song_details_song_details_module__ = __webpack_require__("../../../../../src/app/song-details/song-details.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_translate_translate_module__ = __webpack_require__("../../../../../src/app/core/translate/translate.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_module__ = __webpack_require__("../../../../../src/app/header/header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__song_list_song_list_song_list_component__ = __webpack_require__("../../../../../src/app/song-list/song-list/song-list.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', redirectTo: '/songs', pathMatch: 'full' },
    { path: 'songs', component: __WEBPACK_IMPORTED_MODULE_10__song_list_song_list_song_list_component__["a" /* SongListComponent */], pathMatch: 'full' },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_4__song_list_song_list_module__["a" /* SongListModule */],
            __WEBPACK_IMPORTED_MODULE_5__song_details_song_details_module__["a" /* SongDetailsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__core_translate_translate_module__["a" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_8__header_header_module__["a" /* HeaderModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translate_translate_module__ = __webpack_require__("../../../../../src/app/core/translate/translate.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__song_song_module__ = __webpack_require__("../../../../../src/app/core/song/song.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__translate_translate_module__["a" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_3__song_song_module__["a" /* SongModule */]
        ],
        declarations: []
    })
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/song/song.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__song_service__ = __webpack_require__("../../../../../src/app/core/song/song.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SongModule = (function () {
    function SongModule() {
    }
    return SongModule;
}());
SongModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */]
        ],
        declarations: [],
        providers: [__WEBPACK_IMPORTED_MODULE_2__song_service__["a" /* SongService */]]
    })
], SongModule);

//# sourceMappingURL=song.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/song/song.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_from__ = __webpack_require__("../../../../rxjs/add/observable/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_from__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SongService = (function () {
    function SongService(http) {
        this.http = http;
        this.songList = null;
        this.songList = null;
    }
    SongService.prototype.refreshSongList = function () {
        var _this = this;
        this.http.get('/song-data/list')
            .catch(this.ignoreError)
            .subscribe(function (result) { return _this.songList = result; });
    };
    SongService.prototype.getSongListObservable = function () {
        return this.http.get('/song-data/list')
            .map(function (result) { return result.json(); })
            .catch(this.ignoreError);
    };
    SongService.prototype.getSongLyricsObservable = function (songUid) {
        return this.http.get('/song-data/get?uid=' + songUid)
            .map(function (result) { return result.json(); })
            .catch(this.ignoreError);
    };
    // storeData(lang: Lang) {
    //   this.getLangFile(lang.key).subscribe(result => {this.cachedText[lang.key] = result});
    // }
    //
    // storeFirstLangData() {
    //   this.storeLangData(this.allLang[0]);
    // }
    //
    //
    // getLangFile(lang: string): Observable<Map<string, string>> {
    //   return this.http.get('/assets/lang/text_' + lang + '.json')
    //     .map(this.extractData)
    //     .catch(this.ignoreError);
    // }
    //
    // private extractData(res: Response) {
    //   const body = res.json();
    //   return body.data || { };
    // }
    SongService.prototype.ignoreError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].from([{}]);
    };
    return SongService;
}());
SongService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], SongService);

var _a;
//# sourceMappingURL=song.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/translate/translate.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__translate_service__ = __webpack_require__("../../../../../src/app/core/translate/translate.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TranslateModule = (function () {
    function TranslateModule() {
    }
    return TranslateModule;
}());
TranslateModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */]
        ],
        declarations: [],
        providers: [__WEBPACK_IMPORTED_MODULE_3__translate_service__["a" /* TranslateService */]]
    })
], TranslateModule);

//# sourceMappingURL=translate.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/translate/translate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_from__ = __webpack_require__("../../../../rxjs/add/observable/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_from__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TranslateService = (function () {
    function TranslateService(http) {
        this.http = http;
        this.allLang = [{ key: 'fr', label: 'Français' }, { key: 'en', label: 'English' }, { key: 'pt', label: 'Portuguêse' }];
        this.curLangKey = 'pt';
        this.curLangBs = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]('pt');
        this.curLangObs$ = this.curLangBs.asObservable();
        this.cachedText = new Map();
    }
    TranslateService.prototype.getCurrentLang = function () {
        return this.curLangKey;
    };
    TranslateService.prototype.setCurrentLang = function (langKey) {
        this.curLangKey = langKey;
        this.curLangBs.next(langKey);
    };
    TranslateService.prototype.getAvailableLang = function () {
        return this.allLang;
    };
    TranslateService.prototype.loadAllLang = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].from(this.allLang).subscribe(function (result) { return _this.storeLangData(result); });
    };
    TranslateService.prototype.storeFirstLangData = function () {
        this.storeLangData(this.allLang[0]);
    };
    TranslateService.prototype.storeLangData = function (lang) {
        var _this = this;
        this.getLangFile(lang.key).subscribe(function (result) { _this.cachedText[lang.key] = result; });
    };
    TranslateService.prototype.getLangFile = function (lang) {
        return this.http.get('/assets/lang/text_' + lang + '.json')
            .map(this.extractData)
            .catch(this.ignoreError);
    };
    TranslateService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    TranslateService.prototype.ignoreError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].from([{}]);
    };
    return TranslateService;
}());
TranslateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], TranslateService);

var _a;
//# sourceMappingURL=translate.service.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_component__ = __webpack_require__("../../../../../src/app/header/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_translate_translate_module__ = __webpack_require__("../../../../../src/app/core/translate/translate.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_translate_translate_service__ = __webpack_require__("../../../../../src/app/core/translate/translate.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HeaderModule = (function () {
    function HeaderModule() {
    }
    return HeaderModule;
}());
HeaderModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__core_translate_translate_module__["a" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__core_translate_translate_service__["a" /* TranslateService */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */]]
    })
], HeaderModule);

//# sourceMappingURL=header.module.js.map

/***/ }),

/***/ "../../../../../src/app/header/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div ng-cloak>\n  <div class=\"col-xs-6 col-sm-1 pull-left\">\n    <img class=\"header_icon\" src=\"assets/img/caxixi.jpg\"/>\n  </div>\n  <div class=\"col-xs-6 col-sm-1 pull-right\">\n    <img class=\"header_icon\" src=\"assets/img/berimbau.jpg\"/>\n  </div>\n  <div class=\"col-xs-12 col-sm-10 header_block\">\n    <div class=\"col-xs-12\">\n      <h3>{{titleLabel}}</h3>\n    </div>\n    <div class=\"col-xs-6\">\n      <div class=\"pull-left\"><h6>{{creditsLabel}} <a href=\"assets/install/caposong.apk\"> (Android app)</a></h6></div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"col-xs-6\">\n        <select class=\"form-control\" id=\"selectedLang\" required [(ngModel)]=\"selectedLang\"  name=\"selectedLang\">\n          <option *ngFor=\"let lng of allLangs\" [value]=\"lng.key\">{{lng.label}}</option>\n        </select>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/header/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_translate_translate_service__ = __webpack_require__("../../../../../src/app/core/translate/translate.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(translateSvi, forms) {
        this.translateSvi = translateSvi;
        this.forms = forms;
        this.titleLabel = 'Caposong';
        this.creditsLabel = 'pgeneves';
        this.translateService = translateSvi;
        this.allLangs = translateSvi.getAvailableLang();
        this._selectedLang = this.translateService.getCurrentLang();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.translateService.loadAllLang();
        this.translateService.storeFirstLangData();
    };
    Object.defineProperty(HeaderComponent.prototype, "selectedLang", {
        get: function () { return this._selectedLang; },
        set: function (key) {
            this._selectedLang = key;
            this.translateService.setCurrentLang(key);
        },
        enumerable: true,
        configurable: true
    });
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], HeaderComponent.prototype, "selectedLang", null);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_translate_translate_service__["a" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_translate_translate_service__["a" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/song-details/song-details.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__song_details_song_details_component__ = __webpack_require__("../../../../../src/app/song-details/song-details/song-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__song_list_song_list_song_list_component__ = __webpack_require__("../../../../../src/app/song-list/song-list/song-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_translate_translate_module__ = __webpack_require__("../../../../../src/app/core/translate/translate.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_translate_translate_service__ = __webpack_require__("../../../../../src/app/core/translate/translate.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongDetailsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'songs', component: __WEBPACK_IMPORTED_MODULE_3__song_list_song_list_song_list_component__["a" /* SongListComponent */] }
];
var SongDetailsModule = (function () {
    function SongDetailsModule() {
    }
    return SongDetailsModule;
}());
SongDetailsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__core_translate_translate_module__["a" /* TranslateModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__song_details_song_details_component__["a" /* SongDetailsComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__core_translate_translate_service__["a" /* TranslateService */]]
    })
], SongDetailsModule);

//# sourceMappingURL=song-details.module.js.map

/***/ }),

/***/ "../../../../../src/app/song-details/song-details/song-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/song-details/song-details/song-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div ng-if=\"loaded\" ng-cloak>\n  <br>\n  <div class=\"col-xs-12 view_control_pane\">\n    <div class=\"col-xs-6\">\n      <!--<a href=\"#!/songs\">{{$ctrl.langService.messages.return}}</a>-->\n    </div>\n    <div class=\"col-xs-6\">&nbsp</div>\n  </div>\n  <div class=\"col-xs-12\">\n    <h1>{{song.name}}</h1>\n  </div>\n  <div *ngFor=\"let sentence of sentences\">\n    <div class=\"col-xs-12\"><h4>{{sentence[0]}}</h4></div>\n    <div class=\"col-xs-12\" ng-if=\"sentence[1]\"><h5>{{sentence[1]}}</h5></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/song-details/song-details/song-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_song_song_service__ = __webpack_require__("../../../../../src/app/core/song/song.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_translate_translate_service__ = __webpack_require__("../../../../../src/app/core/translate/translate.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmptySong = {
    title: '',
    name: '',
    uid: '',
    lyrics: [],
    translate: []
};
var SongDetailsComponent = (function () {
    function SongDetailsComponent(route, router, translateSvi, songSvi) {
        this.route = route;
        this.router = router;
        this.translateSvi = translateSvi;
        this.songSvi = songSvi;
        this.formatSongData = function (song) {
            var songTranslate = [];
            this.sentences = [];
            // Get current translation
            var translates = this.song.translate;
            for (var i = 0; i < translates.length; i++) {
                if (translates[i].lang === this.currentLang) {
                    songTranslate = translates[i].lyrics;
                }
            }
            // Compose view data
            for (var i = 0; i < this.song.lyrics.length; i++) {
                var lyr = this.song.lyrics[i];
                var trn = '';
                if (i < songTranslate.length) {
                    trn = songTranslate[i];
                }
                this.sentences.push([lyr, trn]);
            }
        };
        this.translateService = translateSvi;
        this.songService = songSvi;
        this.song = EmptySong;
        this.sentences = [];
        this.loaded = false;
        this.songUid = '';
        this.currentLang = '';
        this.langSubscription = null;
    }
    SongDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Only because we not navigate directly to another details
        // The right way is to use Observable on parameters
        this.songUid = this.route.snapshot.paramMap.get('songUid');
        // Subscribe on language changes
        this.langSubscription = this.translateService.curLangObs$
            .subscribe(function (lang) { return _this.applyLang(lang); });
        this.refreshData();
    };
    SongDetailsComponent.prototype.ngOnDestroy = function () {
        this.langSubscription.unsubscribe();
    };
    SongDetailsComponent.prototype.refreshData = function () {
        var _this = this;
        this.songService.getSongLyricsObservable(this.songUid).subscribe(function (result) { return _this.populateData(result); });
    };
    SongDetailsComponent.prototype.populateData = function (data) {
        this.song = data;
        this.loaded = true;
        this.ngOnChanges();
    };
    SongDetailsComponent.prototype.ngOnChanges = function () {
        if (this.song != null) {
            this.formatSongData(this.song);
        }
        else {
            var songTranslate = [];
            this.sentences = [];
        }
    };
    SongDetailsComponent.prototype.applyLang = function (lang) {
        this.currentLang = lang;
        this.ngOnChanges();
    };
    return SongDetailsComponent;
}());
SongDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-song-details',
        template: __webpack_require__("../../../../../src/app/song-details/song-details/song-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/song-details/song-details/song-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__core_translate_translate_service__["a" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_translate_translate_service__["a" /* TranslateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__core_song_song_service__["a" /* SongService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_song_song_service__["a" /* SongService */]) === "function" && _d || Object])
], SongDetailsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=song-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/song-list/song-list.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__song_list_song_list_component__ = __webpack_require__("../../../../../src/app/song-list/song-list/song-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_song_song_module__ = __webpack_require__("../../../../../src/app/core/song/song.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_song_song_service__ = __webpack_require__("../../../../../src/app/core/song/song.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__song_details_song_details_song_details_component__ = __webpack_require__("../../../../../src/app/song-details/song-details/song-details.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongListModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'songs/details/:songUid', component: __WEBPACK_IMPORTED_MODULE_6__song_details_song_details_song_details_component__["a" /* SongDetailsComponent */] }
];
var SongListModule = (function () {
    function SongListModule() {
    }
    return SongListModule;
}());
SongListModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__core_song_song_module__["a" /* SongModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__core_song_song_service__["a" /* SongService */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__song_list_song_list_component__["a" /* SongListComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__song_list_song_list_component__["a" /* SongListComponent */]]
    })
], SongListModule);

//# sourceMappingURL=song-list.module.js.map

/***/ }),

/***/ "../../../../../src/app/song-list/song-list/song-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/song-list/song-list/song-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div ng-if=\"loaded\" ng-cloak>\n  <br>\n  <div class=\"col-xs-12 view_control_pane\">\n    <!--<div class=\"col-xs-2\" ng-if=\"false\" >-->\n      <!--<button ng-click=\"$ctrl.refreshData()\">{{$ctrl.langService.messages.refresh}}</button>-->\n    <!--</div>-->\n    <!--<div class=\"col-xs-2\">{{$ctrl.langService.messages.search}}</div>-->\n    <!--<div class=\"col-xs-3\">-->\n      <!--<input ng-model=\"$ctrl.query\"/>-->\n    <!--</div>-->\n    <div class=\"col-xs-7\">&nbsp</div>\n  </div>\n  <br>\n  <div *ngFor=\"let song of songs\">\n    <div class=\"col-xs-12\">\n      <a [routerLink]=\"['details', song.uid]\"><h4>{{song.name}}</h4></a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/song-list/song-list/song-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_song_song_service__ = __webpack_require__("../../../../../src/app/core/song/song.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SongListComponent = (function () {
    function SongListComponent(songSvi) {
        this.songSvi = songSvi;
        this.songService = songSvi;
        this.loaded = false;
        this.songs = [];
    }
    SongListComponent.prototype.ngOnInit = function () {
        this.refreshData();
        // debugger;
    };
    SongListComponent.prototype.refreshData = function () {
        var _this = this;
        // this.songService.refreshSongList();
        this.songService.getSongListObservable().subscribe(function (result) { return _this.populateData(result); });
    };
    SongListComponent.prototype.populateData = function (data) {
        this.songs = data;
        this.loaded = true;
    };
    return SongListComponent;
}());
SongListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-song-list',
        template: __webpack_require__("../../../../../src/app/song-list/song-list/song-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/song-list/song-list/song-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_song_song_service__["a" /* SongService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_song_song_service__["a" /* SongService */]) === "function" && _a || Object])
], SongListComponent);

var _a;
//# sourceMappingURL=song-list.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map