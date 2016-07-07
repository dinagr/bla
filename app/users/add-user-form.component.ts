import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { IUser } from './user';
import { IUserPermission } from './user-permission'
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from  './users.service';
import { NavBarComponent } from '../shared/nav-bar.component';
import { LocalStorage, SessionStorage } from '../shared/webStorage.service';

@Component({
    templateUrl: 'app/users/add-user-form.component.html',
    directives: [NavBarComponent],
    providers: [UsersService]
})
export class AddUserComponent implements OnInit, OnDestroy{
    newUser: IUser;
    newUserPermissions: IUserPermission;
    message: any;
    errorMessage: string;
    role: string = 'Regular';
    @LocalStorage() public loggedUser:string;
    @LocalStorage() public loggedUserISAdmin:number;

    constructor(
        private router: Router,
        private usersService: UsersService){}
    
    goToUsersList(): void {
        this.router.navigate(['/users-list']);
    }

    addUser(): void {
        this.usersService.addUser(this.newUser)
            .subscribe(
                result => this.message = result,
                error => this.errorMessage = <any>error);
        this.newUserPermissions.isAdmin = this.role == 'Regular' ? 0 : 1;
        this.usersService.addUserPermission(this.newUserPermissions)
            .subscribe(
                result => this.message = result,
                error => this.errorMessage = <any>error);
        this.router.navigate(['/users-list']); 
    }

    ngOnInit(): void {
        if (!this.loggedUser)
            this.router.navigate(['/log-in']);
        else if (this.loggedUser && !this.loggedUserISAdmin)
            this.router.navigate(['/not-authorized']);
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

}
