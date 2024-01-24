import express, {Express, Request, Response} from 'express';
import * as UserService from "../Users/services/User.service";

const defaultRouter: Express = express();

defaultRouter.get("", (req: Request, res: Response) => {
    res.status(200).send("Welcome");
},);
export default defaultRouter;