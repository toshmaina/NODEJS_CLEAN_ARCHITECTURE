import { plainToClass } from "class-transformer";


import { validate } from "class-validator";

import { Request, Response } from "express";
import { IStudentInteractor } from "../interactorInterfaces/iStudentInteractor";
import { ValidationError } from "class-validator";
import { CreateStudentDataPayloadValidator, deleteStudentPayloadValidator, EditStudentDataPayloadValidator, getStudentsDataPayload } from "../dto/Student.dto";
import { IStudentModel } from "../models/iStudentModel";
import convertParamObjectToNativeObject from "../utilites/handleParamObject";



export class StudentController implements IStudentModel {
    
    constructor(private interactor: IStudentInteractor) {
        
    }

    /**
     * This method takes a payload and a validator and validates the payload against the validator
     * It returns an array of ValidationErrors if there are any errors, otherwise it returns an empty array
     * @param payload The payload to validate
     * @param validator The validator to use
     */
    private async validateInputPayload({payload,validator}: {payload: any, validator: any}): Promise<ValidationError[]> {
        const inputPayload = plainToClass(validator, payload);
        return await validate(inputPayload, {validationError: { target: true}});
    }
   public async createStudent(req: Request, res: Response) {
        const StudentPayload = req.body;
        const validationError = await this.validateInputPayload({payload:StudentPayload,validator: CreateStudentDataPayloadValidator})
        if(validationError.length) return res.status(400).json(validationError)
        const createStudentReponse = await this.interactor.createResource(StudentPayload)
    //Add the conflict exception
       // if(createStudentReponse === "conflict") return res.sendStatus(400)
        if(!createStudentReponse) return res.json({message:"Could not create  the Student!"});
       return res.status(200).json(createStudentReponse);
    }
   public async updateStudent(req: Request, res: Response) {
        const StudentPayload = req.body;
     const validationError = await this.validateInputPayload({payload:StudentPayload,validator:EditStudentDataPayloadValidator})
        if(validationError?.length) return res.status(400).json(validationError)
        const  updateStudentResponse = await  this.interactor.updateResource(StudentPayload);
        if(!updateStudentResponse.code) return res.json({message:"Could not update the Student!"})
       return res.status(200).json({message:"Updated the Student successfully"})
    }
   public async  getStudents(req: Request, res: Response) {
    const {...studentsPayloadParamObject} = req.query
    const studentsPayloadNativeObject = convertParamObjectToNativeObject(studentsPayloadParamObject)
    if(!studentsPayloadNativeObject) return res.sendStatus(400)
    const validationError = await this.validateInputPayload({payload:studentsPayloadNativeObject,validator:getStudentsDataPayload})
   if(validationError?.length) return res.status(400).json(validationError)
    const  getStudentsResponse = await  this.interactor.getResources(studentsPayloadNativeObject)
        if(!getStudentsResponse) return res.json({message:"Could not get Student!"})
       return res.status(200).json(getStudentsResponse)
    }
    public async deleteStudent(req: Request, res: Response) {
        const StudentPayload = req.body?.id;
        const validationError = await this.validateInputPayload({payload:StudentPayload,validator:deleteStudentPayloadValidator})
       if(validationError?.length) return res.status(400).json(validationError)
        const deleteResponse = (await this.interactor.deleteResource(StudentPayload))
       if(!deleteResponse) return   res.json({message:"Could not update the Student!"})
        return res.status(200).json({message:"Student deleted successfully"})
    }
}