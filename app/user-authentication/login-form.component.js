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
var router_1 = require('@angular/router');
var users_service_1 = require('../users/users.service');
var webStorage_service_1 = require('../shared/webStorage.service');
var LogInComponent = (function () {
    function LogInComponent(route, router, usersService) {
        this.route = route;
        this.router = router;
        this.usersService = usersService;
        this.message = '';
        this.errorMessage = '';
    }
    LogInComponent.prototype.goToSignUp = function () {
        this.router.navigate(['/sign-up']);
    };
    LogInComponent.prototype.ngOnInit = function () {
        this.message = '';
    };
    LogInComponent.prototype.ngOnDestroy = function () {
    };
    LogInComponent.prototype.checkUserAuthentication = function () {
        var _this = this;
        this.usersService.userAuthentication(this.userName, this.password).subscribe(function (user) { return _this.checkUser(user); }, function (error) { return _this.errorMessage = error; });
    };
    LogInComponent.prototype.checkUser = function (user) {
        if (user) {
            console.log(user);
            this.loggedUser = user.userName;
            this.getUserPermission(user.id);
            this.router.navigate(['/product-list']);
        }
        else
            this.errorMessage = 'The credentials you have entered are not correct!';
    };
    LogInComponent.prototype.getUserPermission = function (id) {
        var _this = this;
        this.usersService.getUserPermission(id).subscribe(function (user) { return _this.loggedUserISAdmin = (user.isAdmin ? 1 : 0); }, function (error) { return _this.errorMessage = error; });
    };
    __decorate([
        webStorage_service_1.LocalStorage(), 
        __metadata('design:type', String)
    ], LogInComponent.prototype, "loggedUser", void 0);
    __decorate([
        webStorage_service_1.LocalStorage(), 
        __metadata('design:type', Number)
    ], LogInComponent.prototype, "loggedUserISAdmin", void 0);
    LogInComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/user-authentication/login-form.component.html',
            providers: [users_service_1.UsersService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, users_service_1.UsersService])
    ], LogInComponent);
    return LogInComponent;
}());
exports.LogInComponent = LogInComponent;
//# sourceMappingURL=login-form.component.js.map