import  {Request, Response} from 'express';

export interface IStudentModel {
    createStudent(req:Request,res:Response);
    updateStudent(req:Request,res:Response);
    getStudents(req:Request,res:Response);
    deleteStudent(req:Request,res:Response);

}