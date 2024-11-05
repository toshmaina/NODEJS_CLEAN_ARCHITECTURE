import { plainToClass } from "class-transformer";


import { validate } from "class-validator";

import { Request, Response } from "express";
import { ICourseInteractor } from "../interactorInterfaces/iCourseInteractor";
import { ICourseModel } from "../models/iCourseModel";
import { CreateCourseDataPayloadValidator, EditCourseDataPayloadValidator, getCoursesDataPayload, deleteCoursePayloadValidator } from "../dto/Course.dto";
import convertParamObjectToNativeObject from "../utilites/handleParamObject";
import { Course } from "../entities ";



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
        const createCourseReponse = await this.interactor.createResource(CoursePayload)
    //Add the conflict exception
       // if(createCourseReponse === "conflict") return res.sendStatus(400)
        if(!createCourseReponse) return res.json({message:"Could not create  the Course!"});
       return res.status(200).json(createCourseReponse);
    }
   public async updateCourse(req: Request, res: Response) {
        const {id, noOfPracticals,...otherKeys}  = req.body;
        const coursePayload = {id:+id, noOfPracticals:+noOfPracticals,...otherKeys};
        if(!coursePayload) return res.sendStatus(400);
     const validationError = await this.validateInputPayload({payload:coursePayload,validator:EditCourseDataPayloadValidator})
     console.log(validationError)
        if(validationError?.length) return res.status(400).json(validationError)
        
        const  updateCourseResponse = await  this.interactor.updateResource(coursePayload);
        if(!updateCourseResponse.code) return res.json({message:"Could not update the Course!"})
       return res.status(200).json({message:"Updated the Course successfully"})
    }
   public async  getCourses(req: Request, res: Response) {
    const {...coursePayloadParamObject} = req.query
    const CoursePayloadNativeObject = convertParamObjectToNativeObject(coursePayloadParamObject)
    if(!CoursePayloadNativeObject) return res.sendStatus(400)
    const validationError = await this.validateInputPayload({payload:CoursePayloadNativeObject,validator:getCoursesDataPayload})
   if(validationError?.length) return res.status(400).json(validationError)
    const  getCoursesResponse = await  this.interactor.getResources(CoursePayloadNativeObject)
    if(!getCoursesResponse) return res.json({message:"Could not get Course!"})
    return res.status(200).json(getCoursesResponse)
    }
    public async deleteCourse(req: Request, res: Response) {
        const CoursePayload = req.body?.id;
        const validationError = await this.validateInputPayload({payload:CoursePayload,validator:deleteCoursePayloadValidator})
       if(validationError?.length) return res.status(400).json(validationError)
        const deleteResponse = (await this.interactor.deleteResource(CoursePayload))
       if(!deleteResponse) return   res.json({message:"Could not update the Course!"})
        return res.status(200).json({message:"Course deleted successfully"})
    }
}