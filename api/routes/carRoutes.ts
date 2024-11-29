import express from "express"
import { CarRepository } from "../repositories/carRepository";
import { CarController } from "../controllers/carController";
import { Car } from "../entities /Car";
import { CarInteractor } from "../interactors/carInteractor";

const router = express.Router();

/* -------------------Objects instanciation  --------------------- */
const repository = new CarRepository(Car)
const interactor = new CarInteractor(repository)
const controller = new CarController(interactor);

router.get('/car/list', controller.getCars.bind(controller))

router.delete('/car/delete',controller.deleteCar.bind(controller))
router.patch('/car/edit',controller.updateCar.bind(controller))
router.post("/car/add",controller.createCar.bind(controller))
export { router as CarRoutes}