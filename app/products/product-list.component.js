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
var products_service_1 = require('./products.service');
var router_1 = require('@angular/router');
var product_list_filter_pipe_1 = require('./product-list-filter.pipe');
var product_list_min_price_pipe_1 = require('./product-list-min-price.pipe');
var product_list_max_price_pipe_1 = require('./product-list-max-price.pipe');
var nav_bar_component_1 = require('../shared/nav-bar.component');
var ProductListComponent = (function () {
    function ProductListComponent(_productsService, router) {
        this._productsService = _productsService;
        this.router = router;
        this.message = '';
        this.listFilter = '';
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productsService.getAllProducts()
            .subscribe(function (products) { return _this.products = products; }, function (error) { return _this.errorMessage = error; });
    };
    ProductListComponent.prototype.editMode = function (product) {
        product.edit = !product.edit;
    };
    ProductListComponent.prototype.goToAddProduct = function () {
        this.router.navigate(['/add-products']);
    };
    ProductListComponent.prototype.deleteProduct = function (product) {
        var _this = this;
        product.deleted = true;
        product.edit = !product.edit;
        this._productsService.updateProductInList(product)
            .subscribe(function (error) { return _this.errorMessage = error; }, function (result) { return _this.message = 'The product was successfully deleted!'; });
    };
    ProductListComponent.prototype.saveChanges = function (product) {
        var _this = this;
        this.editMode(product);
        this._productsService.updateProductInList(product)
            .subscribe(function (error) { return _this.errorMessage = error; }, function (result) { return _this.message = 'The product was successfully updated!'; });
    };
    ProductListComponent.prototype.clearFilter = function () {
        this.maxPrice = '';
        this.minPrice = '';
        this.listFilter = '';
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'product-list',
            templateUrl: 'app/products/product-list.component.html',
            providers: [products_service_1.ProductsService],
            directives: [nav_bar_component_1.NavBarComponent],
            pipes: [product_list_filter_pipe_1.ProductFilterPipe, product_list_min_price_pipe_1.ProductFilterMinPricePipe, product_list_max_price_pipe_1.ProductFilterMaxPricePipe]
        }), 
        __metadata('design:paramtypes', [products_service_1.ProductsService, router_1.Router])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map