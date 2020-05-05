import { Router } from 'express';
import tasksRouter from './tasks'

const rootRouter:Router = Router();

rootRouter.use("/tasks", tasksRouter)

export default rootRouter;