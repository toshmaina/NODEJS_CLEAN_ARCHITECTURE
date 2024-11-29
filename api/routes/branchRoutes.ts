import { BranchController } from "../controllers/branchController";
import express  from "express";
import { BranchInteractor } from "../interactors/branchInteractor";
import { BranchRepository } from "../repositories/branchRepository";
import { Branch } from "../entities ";

const router = express.Router();

/* -------------------Objects instanciation  --------------------- */
const repository = new BranchRepository(Branch)
const interactor = new BranchInteractor(repository)
const controller = new BranchController(interactor)

router.get('/branch/list', controller.getBranches.bind(controller))

router.delete('/branch/delete',controller.deleteBranch.bind(controller))
router.patch('/branch/edit',controller.updateBranch.bind(controller))
router.post("/branch/add",controller.createBranch.bind(controller))
export { router as BranchRoutes}