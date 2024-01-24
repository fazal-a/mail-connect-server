import express,{Express} from 'express';
import userRoutes from './modules/Users/routes/users.routes';
import authRoutes from "./modules/Auth/routes/auth.routes";
import threadsRouter from "./modules/Threads/routes/threads.routes";
import defaultRoute from "./modules/DefaultRoute/defaultRoute";

const router: Express = express();

router.use('/',defaultRoute);
router.use('/users',userRoutes);
router.use('/auth',authRoutes);
router.use('/threads',threadsRouter);

export default router;