import * as dotenv from "dotenv";
 
//Configure Environment Variables
dotenv.config();

import app from "./app/app";

//Listen on Port
app.listen(process.env.PORT,()=>{
    console.log("listening on port " + process.env.PORT);
})