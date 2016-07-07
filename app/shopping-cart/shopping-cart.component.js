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
var shopping_cart_service_1 = require('./shopping-cart.service');
var webStorage_service_1 = require('../shared/webStorage.service');
var nav_bar_component_1 = require('../shared/nav-bar.component');
var ShoppingCartComponent = (function () {
    function ShoppingCartComponent(_shoppingCartServiceService, router) {
        this._shoppingCartServiceService = _shoppingCartServiceService;
        this.router = router;
        this.message = '';
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._shoppingCartServiceService.getShoppingCart()
            .subscribe(function (shoppingCart) { return _this.shoppingCart = shoppingCart; }, function (error) { return _this.errorMessage = error; });
    };
    /*
    addToBasket(product: IShoppingCart): void{
        this.editMode(product);
         this._productsService.updateProductInList(product)
            .subscribe(
                error => this.errorMessage = <any>error,
                result => this.message = 'The product was successfully updated!');
    }*/
    ShoppingCartComponent.prototype.goToAddMyShoppingCart = function () {
    };
    __decorate([
        webStorage_service_1.LocalStorage(), 
        __metadata('design:type', String)
    ], ShoppingCartComponent.prototype, "loggedUser", void 0);
    ShoppingCartComponent = __decorate([
        core_1.Component({
            selector: 'product-list',
            templateUrl: 'app/shopping-cart/shopping-cart.component.html',
            directives: [nav_bar_component_1.NavBarComponent],
            providers: [shopping_cart_service_1.ShoppingCartService]
        }), 
        __metadata('design:paramtypes', [shopping_cart_service_1.ShoppingCartService, router_1.Router])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());
exports.ShoppingCartComponent = ShoppingCartComponent;
//# sourceMappingURL=shopping-cart.component.js.map