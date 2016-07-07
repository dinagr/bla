"use strict";
var users_list_component_1 = require('./users-list.component');
var user_details_form_component_1 = require('./user-details-form.component');
var add_user_form_component_1 = require('./add-user-form.component');
var sign_in_component_1 = require('../user-authentication/sign-in.component');
var login_form_component_1 = require('../user-authentication/login-form.component');
var logout_form_component_1 = require('../user-authentication/logout-form.component');
exports.UsersRoutes = [
    { path: 'users-list', component: users_list_component_1.UsersListComponent },
    { path: 'user-details/:id', component: user_details_form_component_1.UserDeatilsComponent },
    { path: 'new-user', component: add_user_form_component_1.AddUserComponent },
    { path: 'sign-up', component: sign_in_component_1.SignInComponent },
    { path: 'log-in', component: login_form_component_1.LogInComponent },
    { path: 'log-out', component: logout_form_component_1.LogOutComponent }
];
//# sourceMappingURL=users.routes.js.map