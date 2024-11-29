import { IBranchInteractor } from "../interactorInterfaces/iBranchInteractor";
import { IBranchRepository } from "../iRepositories.ts/iBranchRepository";
import { BaseRepository } from "../repositories/baseRepository";
import { BaseResourceInteractor } from "./baseInteractor";

export class BranchInteractor extends BaseResourceInteractor  implements IBranchInteractor {
    constructor(repository: IBranchRepository){
        super(repository)
    }
}