import  {Request, Response} from 'express';

export interface ICourseModel {
    createCourse(req:Request,res:Response);
    updateCourse(req:Request,res:Response);
    getCourses(req:Request,res:Response);
    deleteCourse(req:Request,res:Response);

}