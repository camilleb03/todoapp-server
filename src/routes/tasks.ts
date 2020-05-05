import { Router } from 'express';
import taskController from "../controllers/tasks";

const router:Router = Router();

router.get('', taskController.getTasks);
router.get('/:id', taskController.getTaskById);
router.post('', taskController.createTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

export = router;