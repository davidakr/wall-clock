webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, dataService, http, loadingCtrl, alertCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.rememberMe = true;
        storage.get('ip').then(function (val) {
            if (val != null) {
                _this.ipAdress = val;
                _this.login();
            }
        });
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.dataService.setURL(this.ipAdress);
        this.http.get('http://' + this.dataService.getURL()).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.dataService.setData(data);
            if (_this.dataService.check()) {
                //this.storage.set('url', this.dataService.getURL());
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                if (_this.rememberMe == true) {
                    _this.storage.set('ip', _this.dataService.getURL());
                }
            }
            else {
                _this.showAlert();
                _this.storage.set('ip', null);
            }
            loading.dismiss();
        }, function (noRequest) {
            _this.showAlert();
            _this.storage.set('ip', null);
            loading.dismiss();
        });
    };
    LoginPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'No Connection!',
            subTitle: 'IP Adress is wrong or Device is currently not connected!',
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"Z:\Projekte\LEDclock\App\WallClockApp\src\pages\login\login.html"*/'<ion-content padding>\n<h1>Clock Login</h1>\n\n<div class="content"> \n  <ion-list>    \n    <ion-item>\n      <ion-input [(ngModel)]="ipAdress" placeholder="IP Adress" type="text" value="" name="ipAdress"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Remember Login</ion-label>\n      <ion-checkbox [(ngModel)]="rememberMe" color="dark" checked="true"></ion-checkbox>\n    </ion-item>    \n  </ion-list>\n\n  <form (ngSubmit)="login()">\n      <button ion-button full>Check</button>\n  </form>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"Z:\Projekte\LEDclock\App\WallClockApp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the UrlProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataProvider = /** @class */ (function () {
    function DataProvider(loadingCtrl, toastCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.rgb = [300, 300, 300];
    }
    DataProvider.prototype.getURL = function () {
        return this.url;
    };
    DataProvider.prototype.setURL = function (url) {
        this.url = url;
    };
    DataProvider.prototype.check = function () {
        if (this.name === 'WallClock') {
            return true;
        }
        else {
            return false;
        }
    };
    DataProvider.prototype.getStatus = function () {
        return this.status;
    };
    DataProvider.prototype.setStatus = function (state) {
        if (state == true) {
            this.addOn += 'STATE_STATUS=1&';
        }
        else {
            this.addOn += 'STATE_STATUS=0&';
        }
    };
    DataProvider.prototype.getSensor = function () {
        return this.sensor;
    };
    DataProvider.prototype.setSensor = function (state) {
        if (state === true) {
            this.addOn += 'BRIGHTNESS_STATUS=0&';
        }
        else {
            this.addOn += 'BRIGHTNESS_STATUS=1&';
        }
    };
    DataProvider.prototype.setBrightness = function (brightness) {
        this.addOn += 'BRIGHTNESS_VALUE=' + brightness + '&';
    };
    DataProvider.prototype.getBrightness = function () {
        return this.brightness;
    };
    DataProvider.prototype.getAddOn = function () {
        return this.addOn;
    };
    DataProvider.prototype.resetAddOn = function () {
        this.addOn = '';
    };
    DataProvider.prototype.setData = function (data) {
        this.name = data.NAME;
        this.rgb[0] = data.RED_RGB;
        this.rgb[1] = data.GREEN_RGB;
        this.rgb[2] = data.BLUE_RGB;
        this.temperature = data.TEMPERATURE;
        this.status = data.STATE_STATUS;
        this.sensor = (data.BRIGHTNESS_STATUS == "0");
        this.brightness = data.BRIGHTNESS_VALUE;
        this.timezone = data.TIMEZONE;
    };
    DataProvider.prototype.getRGB = function () {
        return this.rgb;
    };
    DataProvider.prototype.setRGB = function (rgb) {
        if (this.rgb[0] < 256) {
            this.addOn += 'RED_RGB=' + this.rgb[0] + '&';
        }
        if (this.rgb[1] < 256) {
            this.addOn += 'GREEN_RGB=' + this.rgb[1] + '&';
        }
        if (this.rgb[2] < 256) {
            this.addOn += 'BLUE_RGB=' + this.rgb[2] + '&';
        }
    };
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */]])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, dataService, http, storage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.http = http;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.state = this.dataService.getStatus();
        this.lightSensor = this.dataService.getSensor();
        this.brightness = this.dataService.getBrightness();
        this.rgb = this.dataService.getRGB();
        this.brightnessDisabled = this.lightSensor;
    }
    HomePage.prototype.update = function () {
        var _this = this;
        this.brightnessDisabled = this.lightSensor;
        this.dataService.setStatus(this.state);
        this.dataService.setSensor(this.lightSensor);
        this.dataService.setBrightness(this.brightness);
        this.dataService.setRGB(this.rgb);
        console.log(this.dataService.getAddOn());
        this.http.get('http://' + this.dataService.getURL() + '/?' + this.dataService.getAddOn()).timeout(2500).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.dataService.setData(data);
            _this.dataService.resetAddOn();
        }, function (noRequest) {
            _this.showAlert();
            _this.storage.set('ip', null);
            _this.dataService.resetAddOn();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        });
    };
    HomePage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'No Connection!',
            subTitle: 'IP Adress is wrong or Device is currently not connected!',
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"Z:\Projekte\LEDclock\App\WallClockApp\src\pages\home\home.html"*/'\n<ion-content padding>\n  <ion-list>\n    \n    <ion-item>\n      <ion-label>On/Off</ion-label>\n      <ion-toggle [(ngModel)]="state" (ionBlur)="update()"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>Light Sensor</ion-label>\n      <ion-toggle [(ngModel)]="lightSensor" (ionBlur)="update()"></ion-toggle>\n   </ion-item>    \n  </ion-list>\n\n  <ion-list>\n    <h5>Brightness</h5>  \n    <ion-item>\n      <ion-range min="0" max="255" [(ngModel)]="brightness" class="brightness" \n          [disabled]="brightnessDisabled" [ngClass]="{\'disabled\' : lightSensor}" (ionBlur)="update()">\n        <ion-icon small range-left name="sunny"></ion-icon>\n        <ion-icon range-right name="sunny"></ion-icon>\n      </ion-range>\n    </ion-item>\n    <h5>Red</h5>\n    <ion-item>\n        <ion-range min="1" max="255"[(ngModel)]="rgb[0]" class="red" (ionBlur)="update()">\n          <ion-label range-left>0</ion-label>\n          <ion-label range-right>255</ion-label>\n        </ion-range>\n    </ion-item>\n    <h5>Green</h5>\n    <ion-item>\n        <ion-range min="1" max="255"[(ngModel)]="rgb[1]" class="green" (ionBlur)="update()">\n          <ion-label range-left>0</ion-label>\n          <ion-label range-right>255</ion-label>\n        </ion-range>\n    </ion-item>\n    <h5>Blue</h5>\n    <ion-item>\n        <ion-range min="1" max="255"[(ngModel)]="rgb[2]" class="blue" (ionBlur)="update()">\n          <ion-label range-left>0</ion-label>\n          <ion-label range-right>255</ion-label>\n        </ion-range>    \n    </ion-item>\n  \n\n  </ion-list> \n</ion-content>\n\n\n'/*ion-inline-end:"Z:\Projekte\LEDclock\App\WallClockApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_data_data__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_data_data__["a" /* DataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"Z:\Projekte\LEDclock\App\WallClockApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"Z:\Projekte\LEDclock\App\WallClockApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map