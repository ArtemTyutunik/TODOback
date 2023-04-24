import { Router } from "express";
/*import TodoController from "../controllers/todoController.js";*/
import UserController from "../controllers/userController.js";

const router = Router()


/*-------------------------- Todo -------------------------*/

/*router.get('/get_all/:user_id', TodoController.getAllTodoByUserID)

router.post('/create_todo', TodoController.createTodo)

router.delete('/delete/:id', TodoController.deleteTodo)

router.put('/update/:id', TodoController.updateTodo)*/

/*-------------------------- User -------------------------*/

router.post('/auth', UserController.auth)
router.post('/sign_in', UserController.signIn)


export default router