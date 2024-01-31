import express, {Express, Request, Response} from 'express';

const defaultRouter: Express = express();

defaultRouter.get("", (req: Request, res: Response) => {
    return res.status(200).send({message: "welcome to mail connect server"});
},);
export default defaultRouter;