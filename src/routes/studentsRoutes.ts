import { Student } from "../entities ";
import express from "express";
import { StudentController } from "../controllers/studentController";
import { StudentInteractor } from "../interactors/studentInteractor";
import { StudentRepository } from "../repositories/studentRepository";

const router = express.Router();

/* -------------------Objects instanciation  --------------------- */
const repository = new StudentRepository(Student)
const interactor = new StudentInteractor(repository)
const controller = new StudentController(interactor);

router.get('/students/list', controller.getStudents.bind(controller))

router.delete('/student/delete',controller.deleteStudent.bind(controller))
router.patch('/student/edit',controller.updateStudent.bind(controller))
router.post("/students/add",controller.createStudent.bind(controller))
export { router as StudentsRoutes}