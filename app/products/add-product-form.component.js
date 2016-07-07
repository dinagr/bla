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
var products_service_1 = require('./products.service');
var nav_bar_component_1 = require('../shared/nav-bar.component');
var webStorage_service_1 = require('../shared/webStorage.service');
var AddProductComponent = (function () {
    function AddProductComponent(router, _productsService) {
        this.router = router;
        this._productsService = _productsService;
    }
    AddProductComponent.prototype.goToProductList = function () {
        this.router.navigate(['/product-list']);
    };
    AddProductComponent.prototype.addProduct = function () {
        var _this = this;
        this._productsService.addProductToList(this.newProduct)
            .subscribe(function (result) { return _this.message = result; }, function (error) { return _this.errorMessage = error; });
        this.router.navigate(['/product-list']);
    };
    AddProductComponent.prototype.log = function (x) {
        console.log(x);
    };
    AddProductComponent.prototype.ngOnInit = function () {
        if (!this.loggedUser) {
            console.log(this.loggedUser);
            this.router.navigate(['/log-in']);
        }
        else if (this.loggedUser && !this.loggedUserISAdmin)
            this.router.navigate(['/not-authorized']);
        this.newProduct = {
            id: 0,
            productName: '',
            description: '',
            price: 0,
            edit: false,
            deleted: false
        };
    };
    __decorate([
        webStorage_service_1.LocalStorage(), 
        __metadata('design:type', String)
    ], AddProductComponent.prototype, "loggedUser", void 0);
    __decorate([
        webStorage_service_1.LocalStorage(), 
        __metadata('design:type', Number)
    ], AddProductComponent.prototype, "loggedUserISAdmin", void 0);
    AddProductComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/products/add-product-form.component.html',
            directives: [nav_bar_component_1.NavBarComponent],
            providers: [products_service_1.ProductsService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, products_service_1.ProductsService])
    ], AddProductComponent);
    return AddProductComponent;
}());
exports.AddProductComponent = AddProductComponent;
//# sourceMappingURL=add-product-form.component.js.map