import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from './users.service';
import { IUser } from './user';
import { Router } from '@angular/router';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { UserFirstNamePipe } from './user-list-first-name-filter.pipe';
import { UserByUserNamePipe } from './user-list-user-name-filter.pipe';
import { UserEmailPipe } from './user-list-email-filter.pipe'
import { UserLastNamePipe } from './user-list-last-name-filter.pipe'
import { LocalStorage, SessionStorage } from '../shared/webStorage.service';
import { NavBarComponent } from '../shared/nav-bar.component'

@Component({
    selector: 'product-list',
    templateUrl: 'app/users/users-list.component.html',
    directives: [ROUTER_DIRECTIVES, NavBarComponent],
    providers: [UsersService],
    pipes: [UserFirstNamePipe, UserByUserNamePipe, UserLastNamePipe, UserEmailPipe]   
})
export class UsersListComponent implements OnInit{
    users: IUser[];
    errorMessage: string;
    message: any = '';
    userNameFilter: string;
    firstNameFilter: string;
    lastNameFilter: string;
    emailFilter: string;
    @LocalStorage() public loggedUser:string;
    @LocalStorage() public loggedUserISAdmin:number;

    constructor(private _usersService: UsersService,
    private router: Router){}

    ngOnInit(){
        if (!this.loggedUser)
            this.router.navigate(['/log-in']);
        else if (this.loggedUser && !this.loggedUserISAdmin)
            this.router.navigate(['/not-authorized']);
        this._usersService.getAllUsers()
            .subscribe(
                users => this.users = users,
                error => this.errorMessage = <any>error);
    }
    editMode(user: IUser): void {
        user.edit = !user.edit;
    }
    goToUserDetails(userId: number): void {
        //this.router.navigate(['/user-details', userId]);
    }
    goToAddUser(): void {
        this.router.navigate(['/new-user']);
    }
    deleteProduct(user: IUser): void {
        user.deleted = true;
    }
    onSelect(user: IUser) {
    this.router.navigate(['/user-details', user.id]);
    }
    clearFilter(): void {
        this.emailFilter = '';
        this.userNameFilter = '';
        this.firstNameFilter = '';
        this.lastNameFilter = '';
    }
}
