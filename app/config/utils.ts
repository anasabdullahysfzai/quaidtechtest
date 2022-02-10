import {createHash} from "crypto";

/**
 * @description Method to hash a password with sha256 algorithm
 * @param password Password whose hash will be generated
 * @returns hash
 */
export const generatePasswordHash = (password: string) : string => 
{
    return createHash("sha256").update(password).digest("hex");
}

/**
 * @description Method to validate a password against sha256 hash
 * @param password Password entered by user to check against hash
 * @param previousHash Hash to match against the hash generated by password
 * @returns true (valid password) or false (invalid password)
 */
export const validatePassword = (password: string,previousHash:string) : boolean => {
    
    let hash = createHash("sha256").update(password).digest("hex");

    if(hash === previousHash) return true;

    return false;
}