"use strict";
var router_1 = require('@angular/router');
var products_routes_1 = require('./products/products.routes');
var users_routes_1 = require('./users/users.routes');
var notAuthorized_component_1 = require('./user-authentication/notAuthorized.component');
var shopping_cart_routes_1 = require('./shopping-cart/shopping-cart.routes');
exports.routes = [
    { path: '', redirectTo: '/log-in', pathMatch: 'full' },
    { path: 'not-authorized', component: notAuthorized_component_1.NotAutorizedComponent }
].concat(products_routes_1.ProductsRoutes, users_routes_1.UsersRoutes, shopping_cart_routes_1.ShoppingCartRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map