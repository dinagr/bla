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
var users_service_1 = require('./users.service');
var router_1 = require('@angular/router');
var router_2 = require('@angular/router');
var user_list_first_name_filter_pipe_1 = require('./user-list-first-name-filter.pipe');
var user_list_user_name_filter_pipe_1 = require('./user-list-user-name-filter.pipe');
var user_list_email_filter_pipe_1 = require('./user-list-email-filter.pipe');
var user_list_last_name_filter_pipe_1 = require('./user-list-last-name-filter.pipe');
var webStorage_service_1 = require('../shared/webStorage.service');
var nav_bar_component_1 = require('../shared/nav-bar.component');
var UsersListComponent = (function () {
    function UsersListComponent(_usersService, router) {
        this._usersService = _usersService;
        this.router = router;
        this.message = '';
    }
    UsersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.loggedUser)
            this.router.navigate(['/log-in']);
        else if (this.loggedUser && !this.loggedUserISAdmin)
            this.router.navigate(['/not-authorized']);
        this._usersService.getAllUsers()
            .subscribe(function (users) { return _this.users = users; }, function (error) { return _this.errorMessage = error; });
    };
    UsersListComponent.prototype.editMode = function (user) {
        user.edit = !user.edit;
    };
    UsersListComponent.prototype.goToUserDetails = function (userId) {
        //this.router.navigate(['/user-details', userId]);
    };
    UsersListComponent.prototype.goToAddUser = function () {
        this.router.navigate(['/new-user']);
    };
    UsersListComponent.prototype.deleteProduct = function (user) {
        user.deleted = true;
    };
    UsersListComponent.prototype.onSelect = function (user) {
        this.router.navigate(['/user-details', user.id]);
    };
    UsersListComponent.prototype.clearFilter = function () {
        this.emailFilter = '';
        this.userNameFilter = '';
        this.firstNameFilter = '';
        this.lastNameFilter = '';
    };
    __decorate([
        webStorage_service_1.LocalStorage(), 
        __metadata('design:type', String)
    ], UsersListComponent.prototype, "loggedUser", void 0);
    __decorate([
        webStorage_service_1.LocalStorage(), 
        __metadata('design:type', Number)
    ], UsersListComponent.prototype, "loggedUserISAdmin", void 0);
    UsersListComponent = __decorate([
        core_1.Component({
            selector: 'product-list',
            templateUrl: 'app/users/users-list.component.html',
            directives: [router_2.ROUTER_DIRECTIVES, nav_bar_component_1.NavBarComponent],
            providers: [users_service_1.UsersService],
            pipes: [user_list_first_name_filter_pipe_1.UserFirstNamePipe, user_list_user_name_filter_pipe_1.UserByUserNamePipe, user_list_last_name_filter_pipe_1.UserLastNamePipe, user_list_email_filter_pipe_1.UserEmailPipe]
        }), 
        __metadata('design:paramtypes', [users_service_1.UsersService, router_1.Router])
    ], UsersListComponent);
    return UsersListComponent;
}());
exports.UsersListComponent = UsersListComponent;
//# sourceMappingURL=users-list.component.js.map