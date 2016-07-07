import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { IUser } from '../users/user';
import { IUserPermission } from '../users/user-permission'
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from  '../users/users.service';

@Component({
    templateUrl: 'app/user-authentication/sign-in.component.html',
    providers: [UsersService]
})
export class SignInComponent implements OnInit, OnDestroy{
    newUser: IUser;
    newUserPermissions: IUserPermission;
    message: any;
    errorMessage: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private usersService: UsersService){}

    addUser(): void {
        this.usersService.addUser(this.newUser)
            .subscribe(
                result => this.message = result,
                error => this.errorMessage = <any>error);
        this.usersService.addUserPermission(this.newUserPermissions)
            .subscribe(
                result => this.message = result,
                error => this.errorMessage = <any>error);
        this.router.navigate(['/product-list']); 
    }

    ngOnInit(): void {
        this.newUser = {
            id: 0,
            userName: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            deleted: false,
            edit: false
        }
        this.newUserPermissions = {
            id: 0,
            userId: 0,
            isAdmin: 0
        }
      }
          
    ngOnDestroy() {

  }

  goToLogIn(): void {
        this.router.navigate(['/log-in']);
    }

}


