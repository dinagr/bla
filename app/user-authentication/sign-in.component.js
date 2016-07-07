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
var SignInComponent = (function () {
    function SignInComponent(route, router, usersService) {
        this.route = route;
        this.router = router;
        this.usersService = usersService;
    }
    SignInComponent.prototype.addUser = function () {
        var _this = this;
        this.usersService.addUser(this.newUser)
            .subscribe(function (result) { return _this.message = result; }, function (error) { return _this.errorMessage = error; });
        this.usersService.addUserPermission(this.newUserPermissions)
            .subscribe(function (result) { return _this.message = result; }, function (error) { return _this.errorMessage = error; });
        this.router.navigate(['/product-list']);
    };
    SignInComponent.prototype.ngOnInit = function () {
        this.newUser = {
            id: 0,
            userName: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            deleted: false,
            edit: false
        };
        this.newUserPermissions = {
            id: 0,
            userId: 0,
            isAdmin: 0
        };
    };
    SignInComponent.prototype.ngOnDestroy = function () {
    };
    SignInComponent.prototype.goToLogIn = function () {
        this.router.navigate(['/log-in']);
    };
    SignInComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/user-authentication/sign-in.component.html',
            providers: [users_service_1.UsersService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, users_service_1.UsersService])
    ], SignInComponent);
    return SignInComponent;
}());
exports.SignInComponent = SignInComponent;
//# sourceMappingURL=sign-in.component.js.map