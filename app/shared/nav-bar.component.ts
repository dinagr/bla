import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { LocalStorage, SessionStorage } from './webStorage.service';

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/shared/nav-bar.component.html',
    directives: [ROUTER_DIRECTIVES]      
})
export class NavBarComponent{
          
@LocalStorage() public loggedUser:string; 
  
    constructor(){}
}
