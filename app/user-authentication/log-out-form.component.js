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
var webStorage_service_1 = require('../shared/webStorage.service');
var LogOutComponent = (function () {
    function LogOutComponent() {
    }
    LogOutComponent.prototype.ngOnInit = function () {
        this.loggedUser = '';
        this.loggedUserISAdmin = 0;
    };
    __decorate([
        webStorage_service_1.LocalStorage(), 
        __metadata('design:type', String)
    ], LogOutComponent.prototype, "loggedUser", void 0);
    __decorate([
        webStorage_service_1.LocalStorage(), 
        __metadata('design:type', Number)
    ], LogOutComponent.prototype, "loggedUserISAdmin", void 0);
    LogOutComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/user-authentication/logout-form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], LogOutComponent);
    return LogOutComponent;
}());
exports.LogOutComponent = LogOutComponent;
//# sourceMappingURL=log-out-form.component.js.map