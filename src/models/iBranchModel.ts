import  {Request, Response} from 'express';

export interface IBranchModel {
    createBranch(req:Request,res:Response);
    updateBranch(req:Request,res:Response);
    getBranches(req:Request,res:Response);
    deleteBranch(req:Request,res:Response);

}