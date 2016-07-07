import { Component, OnInit, Input } from '@angular/core';
import { IShoppingCart } from './shopping-cart';
import { Router, ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from './shopping-cart.service';
import { LocalStorage, SessionStorage } from '../shared/webStorage.service';
import { NavBarComponent } from '../shared/nav-bar.component';

@Component({
    selector: 'product-list',
    templateUrl: 'app/shopping-cart/shopping-cart.component.html',
    directives: [NavBarComponent],
    providers: [ShoppingCartService]   
})
export class ShoppingCartComponent implements OnInit{
    shoppingCart: IShoppingCart[];
    errorMessage: string;
    message: any = '';
    @LocalStorage() public loggedUser:string;

    constructor(private _shoppingCartServiceService: ShoppingCartService,
    private router: Router){}
    ngOnInit(): void{
        this._shoppingCartServiceService.getShoppingCart()
            .subscribe(
                shoppingCart => this.shoppingCart = shoppingCart,
                error => this.errorMessage = <any>error);
    }
    /*
    addToBasket(product: IShoppingCart): void{
        this.editMode(product);
         this._productsService.updateProductInList(product)
            .subscribe(
                error => this.errorMessage = <any>error,
                result => this.message = 'The product was successfully updated!');
    }*/

    goToAddMyShoppingCart(): void {

    }

}
