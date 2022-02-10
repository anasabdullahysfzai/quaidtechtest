export default class User {
    name: string;
    email: string;
    passwordHash: string;

    constructor(name:string,email:string,passwordHash:string)
    {
        this.name = name;
        this.email = email;
        this.passwordHash = passwordHash;
    }
    
}