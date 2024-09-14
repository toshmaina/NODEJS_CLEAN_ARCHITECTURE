import { plainToClass } from "class-transformer";


import { validate } from "class-validator";

import { Request, Response } from "express";
import { ICourseInteractor } from "../iBranchInteractor/iCourseInteractor";
import { ICourseModel } from "../models/iCourseModel";
import { CreateCourseDataPayloadValidator, EditCourseDataPayloadValidator, getCoursesDataPayload, deleteCoursePayloadValidator } from "../dto/Course.dto";



export class CourseController implements ICourseModel {
    
    constructor(private interactor: ICourseInteractor) {
        
    }

    private async validateInputPayload({payload,validator}){
        const inputPayload = plainToClass(validator, payload);
        return  await validate(inputPayload, {validationError: { target: true}})
    }
   public async createCourse(req: Request, res: Response) {
        const CoursePayload = req.body;
        const validationError = await this.validateInputPayload({payload:CoursePayload,validator: CreateCourseDataPayloadValidator})
        if(validationError.length) return res.status(400).json(validationError)
        const createCourseReponse = await this.interactor.createCourse(CoursePayload)
    //Add the conflict exception
       // if(createCourseReponse === "conflict") return res.sendStatus(400)
        if(!createCourseReponse) return res.json({message:"Could not create  the Course!"});
       return res.status(200).json(createCourseReponse);
    }
   public async updateCourse(req: Request, res: Response) {
        const CoursePayload = req.body;
     const validationError = await this.validateInputPayload({payload:CoursePayload,validator:EditCourseDataPayloadValidator})
        if(validationError?.length) return res.status(400).json(validationError)
        const  updateCourseResponse = await  this.interactor.updateCourse(CoursePayload);
        if(!updateCourseResponse.code) return res.json({message:"Could not update the Course!"})
       return res.status(200).json({message:"Updated the Course successfully"})
    }
   public async  getCourses(req: Request, res: Response) {
        const CoursePayload = req.body;
        const validationError = await this.validateInputPayload({payload:CoursePayload,validator:getCoursesDataPayload})
       if(validationError?.length) return res.status(400).json(validationError)
        const  getCourseResponse = await  this.interactor.getCourses(CoursePayload)
        if(!getCourseResponse) return res.json({message:"Could not get Course!"})
       return res.status(200).json(getCourseResponse)
    }
    public async deleteCourse(req: Request, res: Response) {
        const CoursePayload = req.body?.id;
        const validationError = await this.validateInputPayload({payload:CoursePayload,validator:deleteCoursePayloadValidator})
       if(validationError?.length) return res.status(400).json(validationError)
        const deleteResponse = (await this.interactor.deleteCourse(CoursePayload))
       if(!deleteResponse) return   res.json({message:"Could not update the Course!"})
        return res.status(200).json({message:"Course deleted successfully"})
    }
}