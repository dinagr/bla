import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from './prod';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from  './products.service';
import { NavBarComponent } from '../shared/nav-bar.component';
import { LocalStorage, SessionStorage } from '../shared/webStorage.service';

@Component({
    templateUrl: 'app/products/add-product-form.component.html',
    directives: [NavBarComponent],
    providers: [ProductsService]
})
export class AddProductComponent implements OnInit{
    newProduct: IProduct;
    message: any;
    errorMessage: string;
    @LocalStorage() public loggedUser:string;
    @LocalStorage() public loggedUserISAdmin:number;

    constructor(
        private router: Router,
        private _productsService: ProductsService){}
    
    goToProductList(): void {
        this.router.navigate(['/product-list']);
    }
    addProduct(): void {
        this._productsService.addProductToList(this.newProduct)
            .subscribe(
                result => this.message = result,
                error => this.errorMessage = <any>error);
        this.router.navigate(['/product-list']);
    }
    log(x: any): void {
        console.log(x);
    }
    ngOnInit(): void {
        if (!this.loggedUser)
        {
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
    }
}
