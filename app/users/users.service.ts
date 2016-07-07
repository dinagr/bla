import {Injectable} from '@angular/core'
import { IUser } from './user'
import { IUserPermission } from './user-permission'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService{
    private _usersUrl = 'app/data/users.json';
    private _fakeUrl = 'http://jsonplaceholder.typicode.com/posts';
    private _userPermissionUrl = 'app/data/user-permission.json';
    usersList: IUser[];
    nextId: number = 6;

    constructor(private _http: Http){ }

    getAllUsers(): Observable<IUser[]> {
        return this._http.get(this._usersUrl)
            .map((response: Response) => <IUser[]>response.json())
            //.do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError); 
     }

     getAllUserPermissions(): Observable<IUserPermission[]> {
        return this._http.get(this._userPermissionUrl)
            .map((response: Response) => <IUserPermission[]>response.json())
            //.do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError); 
     }

     private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
     }
    
    getUser(id: number): Observable<IUser> {
        return this.getAllUsers()
            .map((users: IUser[]) => users.find(u => u.id === id));
        // .do(data => console.log("this user!!!: " + JSON.stringify(data)));
    }

    getUserPermission(id: number): Observable<IUserPermission> {
        return this.getAllUserPermissions()
        .map((users: IUserPermission[]) => users.find(u => u.userId === id));
     // .do(data => console.log("this user!!!: " + JSON.stringify(data)));
    }

    addUser(user: IUser): Observable<IUser[]> {
        return this._http.post(this._fakeUrl, JSON.stringify(user))
            .map((response: Response) => response.json());
    }

    addUserPermission(userPermissions: IUserPermission): Observable<IUserPermission[]> {
        return this._http.post(this._fakeUrl, JSON.stringify(userPermissions))
            .map((response: Response) => response.json());
    }
    
    updateUser(user: IUser): Observable<IUser[]> {
         return this._http.post(this._fakeUrl, JSON.stringify(user))
            .map((response: Response) => response.json());
    }

    userAuthentication(userName: string, password: string): Observable<IUser> {
        console.log(userName);
        console.log(password);
        return this.getAllUsers()
            .map((users: IUser[]) => users.find(u => u.userName == userName && u.password == password));
    }

    userAuthentication1(userName: string, password: string): Observable<IUser> {
        return this._http.get(this._usersUrl)
            .map((response: Response) => response.json())
            .filter( response => response.userNAme == userName && response.password == password);
    }
}
