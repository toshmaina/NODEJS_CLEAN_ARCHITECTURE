import { plainToClass } from "class-transformer";


import { validate } from "class-validator";

import { Request, Response } from "express";
import { ICarInteractor } from "../iBranchInteractor/iCarInteractor";
import { ICarModel } from "../models/iCarModel";
import { CreateCarDataPayloadValidator, deleteCarPayloadValidator, EditCarDataPayloadValidator, getCarsDataPayload } from "../dto/Car.dto";



export class CarController implements ICarModel {
    
    constructor(private interactor: ICarInteractor) {
        
    }

    private async validateInputPayload({payload,validator}){
        const inputPayload = plainToClass(validator, payload);
        return  await validate(inputPayload, {validationError: { target: true}})
    }
   public async createCar(req: Request, res: Response) {
        const CarPayload = req.body;
        const validationError = await this.validateInputPayload({payload:CarPayload,validator: CreateCarDataPayloadValidator})
        if(validationError.length) return res.status(400).json(validationError)
        const createCarReponse = await this.interactor.createCar(CarPayload)
    //Add the conflict exception
       // if(createCarReponse === "conflict") return res.sendStatus(400)
        if(!createCarReponse) return res.json({message:"Could not create  the Car!"});
       return res.status(200).json(createCarReponse);
    }
   public async updateCar(req: Request, res: Response) {
        const CarPayload = req.body;
     const validationError = await this.validateInputPayload({payload:CarPayload,validator:EditCarDataPayloadValidator})
        if(validationError?.length) return res.status(400).json(validationError)
        const  updateCarResponse = await  this.interactor.updateCar(CarPayload);
        if(!updateCarResponse.code) return res.json({message:"Could not update the Car!"})
       return res.status(200).json({message:"Updated the Car successfully"})
    }
   public async  getCars(req: Request, res: Response) {
        const CarPayload = req.body;
        const validationError = await this.validateInputPayload({payload:CarPayload,validator:getCarsDataPayload})
       if(validationError?.length) return res.status(400).json(validationError)
        const  getCarResponse = await  this.interactor.getCars(CarPayload)
        if(!getCarResponse) return res.json({message:"Could not get Car!"})
       return res.status(200).json(getCarResponse)
    }
    public async deleteCar(req: Request, res: Response) {
        const CarPayload = req.body?.id;
        const validationError = await this.validateInputPayload({payload:CarPayload,validator:deleteCarPayloadValidator})
       if(validationError?.length) return res.status(400).json(validationError)
        const deleteResponse = (await this.interactor.deleteCar(CarPayload))
       if(!deleteResponse) return   res.json({message:"Could not update the Car!"})
        return res.status(200).json({message:"Car deleted successfully"})
    }
}