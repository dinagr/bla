import {  PipeTransform, Pipe } from '@angular/core';
import { IUser } from './user';

@Pipe({
    name: 'userByUserNamePipe'
})
export class UserByUserNamePipe implements PipeTransform {

    transform(value: IUser[], filter: string): IUser[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((user: IUser) =>
            user.userName.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}