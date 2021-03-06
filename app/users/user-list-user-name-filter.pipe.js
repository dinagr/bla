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
var UserByUserNamePipe = (function () {
    function UserByUserNamePipe() {
    }
    UserByUserNamePipe.prototype.transform = function (value, filter) {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter(function (user) {
            return user.userName.toLocaleLowerCase().indexOf(filter) !== -1;
        }) : value;
    };
    UserByUserNamePipe = __decorate([
        core_1.Pipe({
            name: 'userByUserNamePipe'
        }), 
        __metadata('design:paramtypes', [])
    ], UserByUserNamePipe);
    return UserByUserNamePipe;
}());
exports.UserByUserNamePipe = UserByUserNamePipe;
//# sourceMappingURL=user-list-user-name-filter.pipe.js.map