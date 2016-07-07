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
var UserDeatilsComponent = (function () {
    function UserDeatilsComponent(route, router, usersService) {
        this.route = route;
        this.router = router;
        this.usersService = usersService;
        this.isNewUser = false;
    }
    UserDeatilsComponent.prototype.goToUsersList = function () {
        this.router.navigate(['/users-list']);
    };
    UserDeatilsComponent.prototype.saveDatails = function () {
        var _this = this;
        this.currentUser.firstName = this.firstName;
        this.currentUser.lastName = this.lastName;
        this.currentUser.userName = this.userName;
        this.currentUser.email = this.email;
        this.currentUser.password = this.password;
        this.currentUser.id = this.id;
        this.usersService.updateUser(this.currentUser)
            .subscribe(function (result) { return _this.message = result; }, function (error) { return _this.errorMessage = error; });
        this.router.navigate(['/users-list']);
    };
    UserDeatilsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.loggedUser)
            this.router.navigate(['/log-in']);
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getUser(id);
            _this.getUserPermission(id);
        });
        this.currentUser = {
            userName: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            deleted: false,
            edit: false,
            id: 0
        };
    };
    UserDeatilsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    UserDeatilsComponent.prototype.getUser = function (id) {
        var _this = this;
        this.usersService.getUser(id).subscribe(function (user) { return (_this.firstName = user.firstName,
            _this.lastName = user.lastName,
            _this.userName = user.userName,
            _this.email = user.email,
            _this.password = user.password,
            _this.id = user.id); }, function (error) { return _this.errorMessage = error; });
    };
    UserDeatilsComponent.prototype.getUserPermission = function (id) {
        var _this = this;
        this.usersService.getUserPermission(id).subscribe(function (user) { return _this.role = (user.isAdmin ? 'Administrator' : 'Regular'); }, function (error) { return _this.errorMessage = error; });
    };
    UserDeatilsComponent.prototype.changeEditingPasswordMode = function () {
        this.editPassword = !this.editPassword;
    };
    __decorate([
        webStorage_service_1.LocalStorage(), 
        __metadata('design:type', String)
    ], UserDeatilsComponent.prototype, "loggedUser", void 0);
    __decorate([
        webStorage_service_1.LocalStorage(), 
        __metadata('design:type', Number)
    ], UserDeatilsComponent.prototype, "loggedUserISAdmin", void 0);
    UserDeatilsComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/users/user-details-form.component.html',
            directives: [nav_bar_component_1.NavBarComponent],
            providers: [users_service_1.UsersService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, users_service_1.UsersService])
    ], UserDeatilsComponent);
    return UserDeatilsComponent;
}());
exports.UserDeatilsComponent = UserDeatilsComponent;
//# sourceMappingURL=user-details-form.component.js.map