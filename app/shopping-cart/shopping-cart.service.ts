import {Injectable} from '@angular/core';
import { IShoppingCart } from './shopping-cart';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShoppingCartService{
    private _shoppingCartUrl = 'app/data/shopping-cart.json';
    private _fakeUrl = 'http://jsonplaceholder.typicode.com/posts';
    shoppingCartList: IShoppingCart[];

    constructor(private _http: Http){  }
    
    getShoppingCart(): Observable<IShoppingCart[]> {
        return this._http.get(this._shoppingCartUrl)
            .map((response: Response) => <IShoppingCart[]>response.json())
           // .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError); 
     }

     private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
     }
/*
     addProductToList(product: IProduct): Observable<IProduct[]> {
        return this._http.post(this._fakeUrl, JSON.stringify(product))
            .map((response: Response) => response.json());
    }

   updateProductInList(product: IProduct): Observable<IProduct[]> {
        return this._http.post(this._fakeUrl, JSON.stringify(product))
            .map((response: Response) => response.json());
    }*/
}