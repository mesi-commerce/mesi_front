export class User {
    id: number;
    firstName: string;
    lastName: string;
    login: string;
    token: string

    constructor(
        id: number,
        firstName: string,
        lastName: string,
        login: string,
        token: string
    ) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.login = login
        this.token = token
    }
}

export const emptyUser: User = {
    id:-1,
    firstName:"",
    lastName:"",
    login:"",
    token:""
}