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
var ProductFilterMinPricePipe = (function () {
    function ProductFilterMinPricePipe() {
    }
    ProductFilterMinPricePipe.prototype.transform = function (value, filter) {
        filter = filter ? filter : 0;
        return filter ? value.filter(function (product) {
            return product.price >= filter;
        }) : value;
    };
    ProductFilterMinPricePipe = __decorate([
        core_1.Pipe({
            name: 'productFilterMinPricePipe'
        }), 
        __metadata('design:paramtypes', [])
    ], ProductFilterMinPricePipe);
    return ProductFilterMinPricePipe;
}());
exports.ProductFilterMinPricePipe = ProductFilterMinPricePipe;
//# sourceMappingURL=product-list-min-price.pipe.js.map