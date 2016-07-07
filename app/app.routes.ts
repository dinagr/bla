import { provideRouter, RouterConfig } from '@angular/router';
import {ProductsRoutes} from './products/products.routes';
import {UsersRoutes} from './users/users.routes';
import { RouteParams } from '@angular/router-deprecated';
import { NotAutorizedComponent } from './user-authentication/notAuthorized.component'
import { ShoppingCartRoutes } from './shopping-cart/shopping-cart.routes'

export const routes: RouterConfig = [
    { path: '', redirectTo: '/log-in', pathMatch: 'full'},
    { path: 'not-authorized', component: NotAutorizedComponent},  
    ...ProductsRoutes,
    ...UsersRoutes,
    ...ShoppingCartRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
