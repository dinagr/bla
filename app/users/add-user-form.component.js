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
var users_service_1 = require('./users.service');
var nav_bar_component_1 = require('../shared/nav-bar.component');
var webStorage_service_1 = require('../shared/webStorage.service');
var AddUserComponent = (function () {
    function AddUserComponent(router, usersService) {
        this.router = router;
        this.usersService = usersService;
        this.role = 'Regular';
    }
    AddUserComponent.prototype.goToUsersList = function () {
        this.router.navigate(['/users-list']);
    };
    AddUserComponent.prototype.addUser = function () {
        var _this = this;
        this.usersService.addUser(this.newUser)
            .subscribe(function (result) { return _this.message = result; }, function (error) { return _this.errorMessage = error; });
        this.newUserPermissions.isAdmin = this.role == 'Regular' ? 0 : 1;
        this.usersService.addUserPermission(this.newUserPermissions)
            .subscribe(function (result) { return _this.message = result; }, function (error) { return _this.errorMessage = error; });
        this.router.navigate(['/users-list']);
    };
    AddUserComponent.prototype.ngOnInit = function () {
        if (!this.loggedUser)
            this.router.navigate(['/log-in']);
        else if (this.loggedUser && !this.loggedUserISAdmin)
            this.router.navigate(['/not-authorized']);
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
    AddUserComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        webStorage_service_1.LocalStorage(), 
        __metadata('design:type', String)
    ], AddUserComponent.prototype, "loggedUser", void 0);
    __decorate([
        webStorage_service_1.LocalStorage(), 
        __metadata('design:type', Number)
    ], AddUserComponent.prototype, "loggedUserISAdmin", void 0);
    AddUserComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/users/add-user-form.component.html',
            directives: [nav_bar_component_1.NavBarComponent],
            providers: [users_service_1.UsersService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, users_service_1.UsersService])
    ], AddUserComponent);
    return AddUserComponent;
}());
exports.AddUserComponent = AddUserComponent;
//# sourceMappingURL=add-user-form.component.js.map