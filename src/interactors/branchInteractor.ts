import { BranchesDescription, BranchPayload, IBranchInteractor } from "../interactorInterfaces/iBranchInteractor";
import { IBranchRepository } from "../iRepositories.ts/iBranchRepository";

export class BranchInteractor implements IBranchInteractor {
    private repository : IBranchRepository
    constructor(repository:IBranchRepository) {
        this.repository = repository
    }
    public  createBranch(branchPayload: BranchPayload) {
       return  this.repository.create(branchPayload)
    }
    public  getBranches(branchesDescriptions: BranchesDescription) {
       return   this.repository.get(branchesDescriptions);
    }
    public  updateBranch(branchPayload: BranchPayload) {
        return  this.repository.update(branchPayload)
    }
    public deleteBranch(id:number){
        return this.repository.delete(id)
    }
}