import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from './products.service';
import { IProduct } from './prod';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductFilterPipe } from './product-list-filter.pipe';
import { ProductFilterMinPricePipe } from './product-list-min-price.pipe';
import { ProductFilterMaxPricePipe } from './product-list-max-price.pipe';
import { NavBarComponent } from '../shared/nav-bar.component';

@Component({
    selector: 'product-list',
    templateUrl: 'app/products/product-list.component.html',
    providers: [ProductsService],
    directives: [NavBarComponent],
    pipes: [ProductFilterPipe, ProductFilterMinPricePipe, ProductFilterMaxPricePipe]      
})
export class ProductListComponent implements OnInit{
    products: IProduct[];
    errorMessage: string;
    message: any = '';
    listFilter: string = '';
    minPrice: any;
    maxPrice: any;
    constructor(private _productsService: ProductsService,
    private router: Router){}
    ngOnInit(): void{
        this._productsService.getAllProducts()
            .subscribe(
                products => this.products = products,
                error => this.errorMessage = <any>error);
    }
    editMode(product: IProduct): void {
        product.edit = !product.edit;
    }
    goToAddProduct(): void {
        this.router.navigate(['/add-products']);
    }
    deleteProduct(product: IProduct): void {
        product.deleted = true;
         product.edit = !product.edit;
         this._productsService.updateProductInList(product)
            .subscribe(
                error => this.errorMessage = <any>error,
                result => this.message = 'The product was successfully deleted!');
    }
    saveChanges(product: IProduct): void{
        this.editMode(product);
         this._productsService.updateProductInList(product)
            .subscribe(
                error => this.errorMessage = <any>error,
                result => this.message = 'The product was successfully updated!');
    }
    clearFilter(): void {
        this.maxPrice = '';
        this.minPrice = '';
        this.listFilter = ''; 
    }
}
