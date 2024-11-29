import express from "express"
import { UserController } from "../controllers/userController";
import { User } from "../entities /User";
import { UserInteractor } from "../interactors/userInteractor";
import { UserRepository } from "../repositories/userRepository";

const router = express.Router();

/* -------------------Objects instanciation  --------------------- */
const repository = new UserRepository(User)
const interactor = new UserInteractor(repository)
const controller = new UserController(interactor);


router.post('/user/login', controller.signInUser.bind(controller))

router.get('/users/list', controller.getUsers.bind(controller))

router.delete('/user/delete',controller.deleteUser.bind(controller))
router.patch('/user/edit',controller.updateUser.bind(controller))
router.post("/user/add",controller.createUser.bind(controller))
export { router as UserRoutes}