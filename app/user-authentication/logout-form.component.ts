import { Component, OnInit, NgZone} from '@angular/core';
import { LocalStorage, SessionStorage } from '../shared/webStorage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ROUTER_DIRECTIVES }  from '@angular/router';

@Component({
    templateUrl: 'app/user-authentication/login-form.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class LogOutComponent implements OnInit{
    zone: NgZone;
    @LocalStorage() public loggedUser:string;
    @LocalStorage() public loggedUserISAdmin:number;

    constructor(private router: Router){
        console.log(this.loggedUser);
        console.log(this.loggedUserISAdmin);
        this.loggedUser = '';
        this.loggedUserISAdmin = 0;
        this.router.navigate(['/log-in']);
    }
        
    ngOnInit(): void {
      }

}
