import * as express from "express";
import * as authCtrl from "../controllers/auth.controller";
import {body} from "express-validator";
const Router = express.Router();

const registerValidation = [body("name").isString(),body("password").isString().isStrongPassword({minLength:6,minLowercase:1,minUppercase:1}).withMessage("Password must be Minimum of 6 Characters with 1 Lowercase and 1 Uppercase")
,body("email").isString().isEmail().withMessage("Email must be a valid email address")];
const loginValidation = [body("email").isString().isEmail().withMessage("Email must be a valid email address"),
body("password").isString().withMessage("Password must be a valid password")];

Router.use("/register",registerValidation,authCtrl.registerUser);
Router.use("/login",loginValidation,authCtrl.loginUser);

export default Router;