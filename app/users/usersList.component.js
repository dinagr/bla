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
var UsersListComponent = (function () {
    function UsersListComponent(_usersService, router) {
        this._usersService = _usersService;
        this.router = router;
    }
    UsersListComponent.prototype.ngOnInit = function () {
        this.users = this._usersService.getAllUsers();
    };
    UsersListComponent.prototype.editMode = function (user) {
        user.edit = !user.edit;
    };
    UsersListComponent.prototype.goToAddProduct = function () {
        //this.router.navigate(['/add-products']);
    };
    UsersListComponent.prototype.deleteProduct = function (user) {
        user.deleted = true;
    };
    UsersListComponent = __decorate([
        core_1.Component({
            selector: 'product-list',
            templateUrl: 'app/products/product-list.component.html',
            providers: [users_service_1.UsersService],
        }), 
        __metadata('design:paramtypes', [users_service_1.UsersService, router_1.Router])
    ], UsersListComponent);
    return UsersListComponent;
}());
exports.UsersListComponent = UsersListComponent;
//# sourceMappingURL=usersList.component.js.map