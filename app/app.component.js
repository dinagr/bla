"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
//import {ProductListComponent} from './products/product-list.component';
var router_1 = require('@angular/router');
//import { AddProductComponent} from  './products/add-product-form.component';
var http_1 = require('@angular/http');
require('rxjs/RX');
var localStorage_service_1 = require('./shared/localStorage.service');
var webStorage_service_1 = require('./shared/webStorage.service');
var nav_bar_component_1 = require('./shared/nav-bar.component');
var AppComponent = (function () {
    function AppComponent(storageService) {
    }
    __decorate([
        webStorage_service_1.LocalStorage(), 
        __metadata('design:type', String)
    ], AppComponent.prototype, "loggedUser", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, nav_bar_component_1.NavBarComponent],
            providers: [http_1.HTTP_PROVIDERS, localStorage_service_1.LocalStorageService]
        }), 
        __metadata('design:paramtypes', [localStorage_service_1.LocalStorageService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map