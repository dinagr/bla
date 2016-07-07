export interface IUser {
    id: number;
    userName: string;
    firstName: string;
    lastName: string;
    email: string,
    password: string,
    edit: boolean;
    deleted: boolean;
}