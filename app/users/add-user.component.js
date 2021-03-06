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
    };
    /*addProduct(): void {
        this.usersService.addProductToList(this.newProduct);
        this.router.navigate(['/product-list']);
        console.log(this.newProduct);
    }
    log(x: any): void {
        console.log(x);
    }*/
    UserDeatilsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getUser(id);
        });
    };
    UserDeatilsComponent.prototype.ngOnDestroy = function () {
        //this.sub.unsubscribe();
    };
    UserDeatilsComponent.prototype.getUser = function (id) {
        var _this = this;
        this.usersService.getUser(id).subscribe(function (user) { return _this.user = user; }, function (error) { return _this.errorMessage = error; });
    };
    UserDeatilsComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/users/add-user-form.component.html',
            providers: [users_service_1.UsersService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, users_service_1.UsersService])
    ], UserDeatilsComponent);
    return UserDeatilsComponent;
}());
exports.UserDeatilsComponent = UserDeatilsComponent;
//# sourceMappingURL=add-user.component.js.map