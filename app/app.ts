import * as express from "express";
import helmet from "helmet";
import * as cors from "cors";
import indexRoute from "./routes/index.route";

const app = express();

//Start Middlewares
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Mount Base Route
app.use('/',indexRoute);

export default app;