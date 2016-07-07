import { RouterConfig } from '@angular/router';
import { UsersListComponent } from  './users-list.component';
import { UserDeatilsComponent } from './user-details-form.component';
import { AddUserComponent } from './add-user-form.component'
import { SignInComponent } from '../user-authentication/sign-in.component'
import { LogInComponent } from '../user-authentication/login-form.component'
import { LogOutComponent } from '../user-authentication/logout-form.component'

export const UsersRoutes: RouterConfig = [
    { path: 'users-list', component: UsersListComponent},
    { path: 'user-details/:id', component: UserDeatilsComponent},
    { path: 'new-user', component: AddUserComponent}, 
    { path: 'sign-up', component: SignInComponent},
    { path: 'log-in', component: LogInComponent},
    { path: 'log-out', component: LogOutComponent}
];
