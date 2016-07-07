import { Component, OnInit } from '@angular/core';
//import {ProductListComponent} from './products/product-list.component';
import { ROUTER_DIRECTIVES }  from '@angular/router';
//import { AddProductComponent} from  './products/add-product-form.component';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/RX';
import { LocalStorageService } from './shared/localStorage.service';
import { LocalStorage, SessionStorage } from './shared/webStorage.service';
import { NavBarComponent } from './shared/nav-bar.component'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES, NavBarComponent],
    providers: [HTTP_PROVIDERS, LocalStorageService]
})

export class AppComponent{

    @LocalStorage() public loggedUser:string; 

    constructor(storageService: LocalStorageService){
    }

}
