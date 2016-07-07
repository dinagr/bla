"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var localStorage_service_1 = require('./shared/localStorage.service');
var appPromise = platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_1.HTTP_PROVIDERS, app_routes_1.APP_ROUTER_PROVIDERS, localStorage_service_1.LocalStorageService
]);
localStorage_service_1.LocalStorageSubscriber(appPromise);
//# sourceMappingURL=main.js.map