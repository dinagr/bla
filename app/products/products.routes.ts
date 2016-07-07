import { RouterConfig } from '@angular/router';
import { AddProductComponent } from  './add-product-form.component';
import { ProductListComponent } from './product-list.component';

export const ProductsRoutes: RouterConfig = [
    { path: 'product-list', component: ProductListComponent},
    { path: 'add-products', component: AddProductComponent }
];
