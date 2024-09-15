import { plainToClass } from "class-transformer";


import { validate } from "class-validator";

import { Request, Response } from "express";
import { IStudentInteractor } from "../interactorInterfaces/iStudentInteractor";

import { CreateStudentDataPayloadValidator, deleteStudentPayloadValidator, EditStudentDataPayloadValidator, getStudentsDataPayload } from "../dto/Student.dto";
import { IStudentModel } from "../models/iStudentModel";



export class StudentController implements IStudentModel {
    
    constructor(private interactor: IStudentInteractor) {
        
    }

    private async validateInputPayload({payload,validator}){
        const inputPayload = plainToClass(validator, payload);
        return  await validate(inputPayload, {validationError: { target: true}})
    }
   public async createStudent(req: Request, res: Response) {
        const StudentPayload = req.body;
        const validationError = await this.validateInputPayload({payload:StudentPayload,validator: CreateStudentDataPayloadValidator})
        if(validationError.length) return res.status(400).json(validationError)
        const createStudentReponse = await this.interactor.createStudent(StudentPayload)
    //Add the conflict exception
       // if(createStudentReponse === "conflict") return res.sendStatus(400)
        if(!createStudentReponse) return res.json({message:"Could not create  the Student!"});
       return res.status(200).json(createStudentReponse);
    }
   public async updateStudent(req: Request, res: Response) {
        const StudentPayload = req.body;
     const validationError = await this.validateInputPayload({payload:StudentPayload,validator:EditStudentDataPayloadValidator})
        if(validationError?.length) return res.status(400).json(validationError)
        const  updateStudentResponse = await  this.interactor.updateStudent(StudentPayload);
        if(!updateStudentResponse.code) return res.json({message:"Could not update the Student!"})
       return res.status(200).json({message:"Updated the Student successfully"})
    }
   public async  getStudents(req: Request, res: Response) {
        const StudentPayload = req.body;
        const validationError = await this.validateInputPayload({payload:StudentPayload,validator:getStudentsDataPayload})
       if(validationError?.length) return res.status(400).json(validationError)
        const  getStudentResponse = await  this.interactor.getStudents(StudentPayload)
        if(!getStudentResponse) return res.json({message:"Could not get Student!"})
       return res.status(200).json(getStudentResponse)
    }
    public async deleteStudent(req: Request, res: Response) {
        const StudentPayload = req.body?.id;
        const validationError = await this.validateInputPayload({payload:StudentPayload,validator:deleteStudentPayloadValidator})
       if(validationError?.length) return res.status(400).json(validationError)
        const deleteResponse = (await this.interactor.deleteStudent(StudentPayload))
       if(!deleteResponse) return   res.json({message:"Could not update the Student!"})
        return res.status(200).json({message:"Student deleted successfully"})
    }
}