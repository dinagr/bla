import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { IUser } from './user';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from  './users.service';
import { NavBarComponent } from '../shared/nav-bar.component';
import { LocalStorage, SessionStorage } from '../shared/webStorage.service';

@Component({
    templateUrl: 'app/users/user-details-form.component.html',
    directives: [NavBarComponent],
    providers: [UsersService]
})
export class UserDeatilsComponent implements OnInit, OnDestroy{
    currentUser: IUser;
    isNewUser: boolean = false;
    currentUserId: number;
    errorMessage: string;
    message: any;
    firstName: string;
    email: string;
    userName: string;
    password: string;
    lastName: string;
    role: string;
    id: number;
    private sub: any;
    editPassword: boolean;
    @LocalStorage() public loggedUser:string;
    @LocalStorage() public loggedUserISAdmin:number;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private usersService: UsersService){}
    
    goToUsersList(): void {
        this.router.navigate(['/users-list']);
    }
    saveDatails(): void {
        this.currentUser.firstName = this.firstName;
        this.currentUser.lastName = this.lastName;
        this.currentUser.userName = this.userName;
        this.currentUser.email = this.email;
        this.currentUser.password = this.password;
        this.currentUser.id = this.id;

        this.usersService.updateUser(this.currentUser)
            .subscribe(
                result => this.message = result,
                error => this.errorMessage = <any>error);
        this.router.navigate(['/users-list']);
    }
 
    ngOnInit(): void {
        if (!this.loggedUser)
                this.router.navigate(['/log-in']);
        this.sub = this.route.params.subscribe(
                params => {
                    let id = +params['id'];
                    this.getUser(id);
                    this.getUserPermission(id);
            });
        this.currentUser = {
            userName: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            deleted: false,
            edit: false,
            id: 0
        }
      }
          
    ngOnDestroy() {
      this.sub.unsubscribe();
  }

  getUser(id: number) {
        this.usersService.getUser(id).subscribe(
            user => (this.firstName = user.firstName, 
            this.lastName = user.lastName,
            this.userName = user.userName,
            this.email = user.email,
            this.password = user.password,
            this.id = user.id),
            error => this.errorMessage = <any>error);
    }

    getUserPermission(id: number): void {
        this.usersService.getUserPermission(id).subscribe(
            user => this.role = (user.isAdmin ? 'Administrator' : 'Regular'),
            error => this.errorMessage = <any>error);
    }

    changeEditingPasswordMode(): void {
        this.editPassword = !this.editPassword;
    }
}
