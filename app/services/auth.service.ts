import User from "../classes/user.class";
import {validatePassword,generatePasswordHash} from "../config/utils";

interface UserInterface {
    name: string,
    password: string,
    email: string
}

interface LoginCredentials {
    email: string,
    password: string
}

const DB : User[] = [];

/**
 * @description Service to register a user and return UserInterface Object or return NULL in case of error
 * @param user UserInterface Object
 * @returns UserInterface Object for new user or NULL
 */

export const registerService = (user:UserInterface): UserInterface => {
    
    const {name,email,password} = user;

    const foundUsers = DB.filter((userFromDB) => {
        return userFromDB.email === email;
    })

    //Return null if Users exists with same email

    if(foundUsers.length > 0) return null; 

    const newUser = new User(name,email,generatePasswordHash(password));

    DB.push(newUser);

    return {name,email,password};

}

/**
 * @description Service to login a user and return UserInterface Object or return null in case of error
 * @param credentials LoginCredentials Object
 * @returns UserInterface Object or NULL
 */
export const loginService = (credentials:LoginCredentials): UserInterface => {

    const {email,password} = credentials;

    const foundUsers = DB.filter((userFromDB) => {
        return userFromDB.email === email;
    })

    //Return null if no user found with email
    if (foundUsers.length <= 0) return null;

    let user : User = foundUsers[0];

    if(validatePassword(password,user.passwordHash))
    {
        return {name:user.name,email:user.email,password}
    }

    return null;
}