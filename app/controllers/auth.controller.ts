import {Request,Response} from "express";
import {Result, ValidationError, validationResult} from "express-validator";
import {registerService,loginService} from "../services/auth.service";

/**
 * @description registerUser controller to register a user and return result or return error
 * @param req Express Request Object
 * @param res Express Response Object
 * @returns 
 */
export const registerUser =  (req: Request , res: Response) : any => {

    let result : Result<ValidationError> = validationResult(req);
    
    if(!result.isEmpty())
    {
        return res.status(422).send(result.array({onlyFirstError:true}));
    }

    const {name,email,password} = req.body;

    let user = registerService({name,email,password});

    if(!user) return res.status(400).json({messages: "User Already Exists in Database"});

    return res.status(200).json({message:"User Successfully Registered"});
}

/**
 * @description Login User Controller calls the loginService to Login a user and return result or return error
 * @param req Express Request Object
 * @param res Express Response Object
 * @returns 
 */
export const loginUser  =  (req: Request , res: Response): any => {

    let result : Result<ValidationError> = validationResult(req);
    
    if(!result.isEmpty())
    {
        return res.status(422).send(result.array());
    }

    const {email,password} = req.body;

    let user = loginService({email,password});

    if(!user) return res.status(400).json({message: "Invalid username or password"});

    return res.status(200).json({name: user.name});

}