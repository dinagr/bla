import {  PipeTransform, Pipe } from '@angular/core';
import { IUser } from './user';

@Pipe({
    name: 'userFirstNamePipe'
})
export class UserFirstNamePipe implements PipeTransform {

    transform(value: IUser[], filter: string): IUser[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((user: IUser) =>
            user.firstName.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}