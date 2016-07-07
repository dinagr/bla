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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var UsersService = (function () {
    function UsersService(_http) {
        this._http = _http;
        this._usersUrl = 'app/data/users.json';
        this._fakeUrl = 'http://jsonplaceholder.typicode.com/posts';
        this._userPermissionUrl = 'app/data/user-permission.json';
        this.nextId = 6;
    }
    UsersService.prototype.getAllUsers = function () {
        return this._http.get(this._usersUrl)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UsersService.prototype.getAllUserPermissions = function () {
        return this._http.get(this._userPermissionUrl)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UsersService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    UsersService.prototype.getUser = function (id) {
        return this.getAllUsers()
            .map(function (users) { return users.find(function (u) { return u.id === id; }); });
        // .do(data => console.log("this user!!!: " + JSON.stringify(data)));
    };
    UsersService.prototype.getUserPermission = function (id) {
        return this.getAllUserPermissions()
            .map(function (users) { return users.find(function (u) { return u.userId === id; }); });
        // .do(data => console.log("this user!!!: " + JSON.stringify(data)));
    };
    UsersService.prototype.addUser = function (user) {
        return this._http.post(this._fakeUrl, JSON.stringify(user))
            .map(function (response) { return response.json(); });
    };
    UsersService.prototype.addUserPermission = function (userPermissions) {
        return this._http.post(this._fakeUrl, JSON.stringify(userPermissions))
            .map(function (response) { return response.json(); });
    };
    UsersService.prototype.updateUser = function (user) {
        return this._http.post(this._fakeUrl, JSON.stringify(user))
            .map(function (response) { return response.json(); });
    };
    UsersService.prototype.userAuthentication = function (userName, password) {
        console.log(userName);
        console.log(password);
        return this.getAllUsers()
            .map(function (users) { return users.find(function (u) { return u.userName == userName && u.password == password; }); });
    };
    UsersService.prototype.userAuthentication1 = function (userName, password) {
        return this._http.get(this._usersUrl)
            .map(function (response) { return response.json(); })
            .filter(function (response) { return response.userNAme == userName && response.password == password; });
    };
    UsersService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map