import {Injectable} from '@angular/core';
import { IProduct } from './prod';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductsService{
    private _productsUrl = 'app/data/products.json';
    private _fakeUrl = 'http://jsonplaceholder.typicode.com/posts';
    productList: IProduct[];
    nextId: number = 6;

    constructor(private _http: Http){  }
    
    getAllProducts(): Observable<IProduct[]> {
        return this._http.get(this._productsUrl)
            .map((response: Response) => <IProduct[]>response.json())
           // .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError); 
     }

     private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
     }

     addProductToList(product: IProduct): Observable<IProduct[]> {
        return this._http.post(this._fakeUrl, JSON.stringify(product))
            .map((response: Response) => response.json());
    }

   updateProductInList(product: IProduct): Observable<IProduct[]> {
        return this._http.post(this._fakeUrl, JSON.stringify(product))
            .map((response: Response) => response.json());
    }
}