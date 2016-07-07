import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { IUser } from '../users/user';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from  '../users/users.service';
import { LocalStorage, SessionStorage } from '../shared/webStorage.service';

@Component({
    templateUrl: 'app/user-authentication/login-form.component.html',
    providers: [UsersService]
})
export class LogInComponent implements OnInit, OnDestroy{
    message: string = '';
    userName: string;
    password: string;
    loginUser: IUser;
    errorMessage: any = '';
    @LocalStorage() public loggedUser:string;
    @LocalStorage() public loggedUserISAdmin:number;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private usersService: UsersService,
        ){}
    
    goToSignUp(): void {
        this.router.navigate(['/sign-up']);
    }
 
    ngOnInit(): void {
        this.message = '';
      }
          
    ngOnDestroy() {
      }

  checkUserAuthentication() {
        this.usersService.userAuthentication(this.userName, this.password).subscribe(
            user => this.checkUser(user),
            error => this.errorMessage = <any>error);
    }

checkUser(user: IUser){
    if (user)
    {
        console.log(user);
        this.loggedUser = user.userName;
        this.getUserPermission(user.id);
        this.router.navigate(['/product-list']);
    }
    else
        this.errorMessage = 'The credentials you have entered are not correct!';
}

    getUserPermission(id: number): void {
        this.usersService.getUserPermission(id).subscribe(
            user => this.loggedUserISAdmin = (user.isAdmin ? 1 : 0),
            error => this.errorMessage = <any>error);
    }

  
}
