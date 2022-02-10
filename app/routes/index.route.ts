import * as express from "express";
import authRouter from "./auth.route";
const Router = express.Router();

//Mount AuthRouter
Router.use("/auth",authRouter);

export default Router;