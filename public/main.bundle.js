webpackJsonp([2],{

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
exports.push([module.i, "agm-map {\r\n  height: 400px;\r\n}\r\n\r\n.form-row {\r\n    margin-top: 5vh;\r\n}\r\n\r\n\r\n.card-img {\r\n  height: 30vh;\r\n  width: auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"index-banner\" class=\"parallax-container\">\n  <nav class=\"green darken-2 nav-transparent\" role=\"navigation\">\n    <div class=\"nav-wrapper container\">\n      <a id=\"logo-container\" href=\"#\" class=\"brand-logo white-text\"><i style=\"font-size: 30px\" class=\"material-icons\">pin_drop</i>Berlin Location</a>\n      <ul class=\"right hide-on-med-and-down\">\n        <li><a class=\"white-text\" href=\"#!\">About</a></li>\n      </ul>\n      <ul id=\"nav-mobile\" class=\"side-nav white-text\">\n        <li><a href=\"#\">Home</a></li>\n        <li><a href=\"\">Map</a></li>\n      </ul>\n      <a href=\"#\" data-activates=\"nav-mobile\" class=\"button-collapse white-text\"><i class=\"material-icons\">menu</i></a>\n    </div>\n  </nav>\n  <div class=\"container\">\n    <form class=\"row center form-row\" [formGroup]=\"searchForm\">\n      <div class=\"col white s12 push-l3 l6\">\n        <input class=\"black-text\" type=\"text\" #search autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" placeholder=\"Search Location\" formControlName=\"_address\">\n      </div>\n      <!-- <div class=\"form-group\">\n        <input placeholder=\"search for location\" type=\"text\" class=\"form-control\" #search [formControl]=\"searchControl\">\n      </div> -->\n    </form>\n  </div>\n\n  <div class=\"row container\">\n    <div class=\"col s12 l12 center\">\n      <h3 class=\"black-text\"> {{resultTitle}} </h3>\n      <img class=\"activator card-img\" src=\"https://www.berlin-stadtrundfahrt-online.de/_media/img/small/berlin-cathedral-at-lustgarten.jpg\">\n      <p class=\"black-text flow-text\"> Height Above Sea: 2300 feet. </p>\n      <p class=\"black-text flow-text\"> Population: 300 thousands. </p>\n    </div>\n  </div>\n\n\n  <div class=\"row container\">\n    <div class=\"col s12 l12\">\n      <p class=\"flow-text black-text\">Here is some more information about this product that is only revealed once clicked on.\n        Here is some more information about this product that is only revealed once clicked on.\n      Here is some more information about this product that is only revealed once clicked on.\n      </p>\n      <br>\n      <p class=\"flow-text black-text\">Here is some more information about this product that is only revealed once clicked on.\n        Here is some more information about this product that is only revealed once clicked on.\n      Here is some more information about this product that is only revealed once clicked on.\n      </p>\n    </div>\n  </div>\n\n  <div class=\"row container\">\n    <h3 class=\"black-text\">Places around {{resultTitle}}</h3>\n  </div>\n  <div class=\"row container\">\n    <div class=\"col s12 l4\" *ngFor=\"let place of foundPlaces\">  \n      <div class=\"card\">\n        <div class=\"card-image waves-effect waves-block waves-light\">\n          <!-- <img class=\"activator card-img\" src=\"{{place.icon}}\"> -->\n        </div>\n        <div class=\"card-content\">\n          <span class=\"card-title activator grey-text text-darken-4\">{{place.name}}<img class=\"right\" src=\"{{place.icon}}\" style=\"width: 32px; height:auto\"></span>\n        </div>\n        <div class=\"card-reveal\">\n          <span class=\"card-title grey-text text-darken-4\">{{place.name}}<i class=\"material-icons right\">close</i></span>\n          <p>{{place.vicinity}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"5\" [scrollwheel]=\"false\">\n    <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n  </agm-map>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_services_location_service__ = __webpack_require__("../../../../../src/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_services_google_maps_service_service__ = __webpack_require__("../../../../../src/services/google-maps-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppComponent = (function () {
    function AppComponent(mapService, _locationService, mapsAPILoader, ngZone) {
        this.mapService = mapService;
        this._locationService = _locationService;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.title = 'Mapocation';
        this.locations = [];
        this.iconUrl = "/assets/map_pink.png";
        this.place = "taxila";
        this.resultTitle = 'no results';
        this.latitude = 30.935432;
        this.longitude = 74.8746008;
        this.zoom = 6;
        this.mainImageUrl = '';
        this.searchForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            '_address': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]()
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.searchForm.valueChanges
        //   .debounceTime(200)
        //   .switchMap(value => this.mapService.getCoordinates(value._address))
        //   .subscribe((results) => {
        //     if (this.searchForm.controls['_address'].value) {
        //       this.resultTitle = results.results[0].formatted_address;
        //       this._locationService.getIntroFromWikPedi(results.results[0].geometry.location.lat, results.results[0].geometry.location.lng)
        //       .subscribe((res) => {
        //         console.log(res);
        //       })
        //     }
        //   })
        var _this = this;
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    _this._locationService.getPlaces(place.geometry.location.lat(), place.geometry.location.lng())
                        .subscribe(function (res) {
                        if (res) {
                            console.log(res.results);
                            _this.foundPlaces = res.results;
                        }
                    });
                    //set latitude, longitude and zoom
                    _this.resultTitle = place.name;
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 12;
                });
            });
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_2" /* ViewChild */])("search"),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
    ], AppComponent.prototype, "searchElementRef", void 0);
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_0" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_services_google_maps_service_service__["a" /* GoogleMapsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_services_google_maps_service_service__["a" /* GoogleMapsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0_services_location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_services_location_service__["a" /* LocationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__agm_core__["e" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__agm_core__["e" /* MapsAPILoader */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* NgZone */]) === "function" && _e || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_services_google_maps_service_service__ = __webpack_require__("../../../../../src/services/google-maps-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_snazzy_info_window__ = __webpack_require__("../../../../@agm/snazzy-info-window/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_services_location_service__ = __webpack_require__("../../../../../src/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_google_maps_key__ = __webpack_require__("../../../../../src/app/google.maps.key.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyCqzLJPg70Gq7QZe3gw3lI0IPwSPB2ytg0',
                    libraries: ["places"]
                }),
                __WEBPACK_IMPORTED_MODULE_4__agm_snazzy_info_window__["a" /* AgmSnazzyInfoWindowModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_0_services_google_maps_service_service__["a" /* GoogleMapsService */], __WEBPACK_IMPORTED_MODULE_8_services_location_service__["a" /* LocationService */], __WEBPACK_IMPORTED_MODULE_9_app_google_maps_key__["a" /* GoogleMapsKey */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/google.maps.key.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsKey; });
var GoogleMapsKey = (function () {
    function GoogleMapsKey() {
        this.API_KEY = 'AIzaSyCqzLJPg70Gq7QZe3gw3lI0IPwSPB2ytg0';
    }
    GoogleMapsKey.prototype.getKey = function () {
        return this.API_KEY;
    };
    return GoogleMapsKey;
}());

//# sourceMappingURL=google.maps.key.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
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

/***/ "../../../../../src/services/google-maps-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GoogleMapsService = (function () {
    function GoogleMapsService(http) {
        this.http = http;
        this.getCordsUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=";
    }
    GoogleMapsService.prototype.getCoordinates = function (_address) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
            headers: headers
        });
        // console.log(artistData)
        return this.http.get("" + (this.getCordsUrl + encodeURIComponent(_address)))
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    GoogleMapsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], GoogleMapsService);
    return GoogleMapsService;
    var _a;
}());

//# sourceMappingURL=google-maps-service.service.js.map

/***/ }),

/***/ "../../../../../src/services/location.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_google_maps_key__ = __webpack_require__("../../../../../src/app/google.maps.key.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocationService = (function () {
    function LocationService(_http, _googleMapsKey) {
        this._http = _http;
        this._googleMapsKey = _googleMapsKey;
        this.headerPhotoUrl = "http://localhost:3000/getHeaderPhoto";
        this.getPlacesUrl = "https://berlin-location.herokuapp.com/getPlaces";
    }
    LocationService.prototype.getHeaderPhoto = function (placeId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json; charset=UTF-8');
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* RequestOptions */]({
            headers: headers,
            params: {
                placeId: placeId
            }
        });
        return this._http.get("" + this.headerPhotoUrl, options)
            .map(function (res) {
            return res.json();
        });
    };
    LocationService.prototype.getPlaces = function (lat, lng) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json; charset=UTF-8');
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* RequestOptions */]({
            headers: headers,
            params: {
                lat: lat, lng: lng
            }
        });
        return this._http.get("" + this.getPlacesUrl, options)
            .map(function (res) {
            return res.json();
        });
    };
    LocationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_google_maps_key__["a" /* GoogleMapsKey */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_google_maps_key__["a" /* GoogleMapsKey */]) === "function" && _b || Object])
    ], LocationService);
    return LocationService;
    var _a, _b;
}());

//# sourceMappingURL=location.service.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map