import  {Request, Response} from 'express';

export interface IUserModel {
    createUser(req:Request,res:Response);
    updateUser(req:Request,res:Response);
    getUsers(req:Request,res:Response);
    deleteUser(req:Request,res:Response);
    signInUser(req:Request,res:Response);

}