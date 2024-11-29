import express from "express"
import { CourseController } from "../controllers/courseController";
import { Course } from "../entities ";
import { CourseInteractor } from "../interactors/courseInteractor";
import { CourseRepository } from "../repositories/courseRepository";

const router = express.Router();

/* -------------------Objects instanciation  --------------------- */
const repository = new CourseRepository(Course)
const interactor = new CourseInteractor(repository)
const controller = new CourseController(interactor);

router.get('/course/list', controller.getCourses.bind(controller))

router.delete('/course/delete',controller.deleteCourse.bind(controller))
router.patch('/course/edit',controller.updateCourse.bind(controller))
router.post("/course/add",controller.createCourse.bind(controller))
export { router as CourseRoutes}