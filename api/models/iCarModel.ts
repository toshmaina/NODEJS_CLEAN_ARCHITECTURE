import  {Request, Response} from 'express';

export interface ICarModel {
    createCar(req:Request,res:Response);
    updateCar(req:Request,res:Response);
    getCars(req:Request,res:Response);
    deleteCar(req:Request,res:Response);

}