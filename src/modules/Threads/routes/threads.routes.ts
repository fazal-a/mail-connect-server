import express, {Express} from 'express';
import ThreadsController from "../controllers/threads.controllers";

const threadsRouter: Express = express();

threadsRouter.get("/getThreadsList", ThreadsController.fetchThreadsList);
threadsRouter.get("/getThreadDetails/:id", ThreadsController.fetchThreadDetails);
export default threadsRouter;