import { BaseRepository } from "./baseRepository";

import { TModel } from "../iRepositories.ts/iBranchRepository";
import { Model } from "mongoose";
import { studentDoc } from "../entities ";
import { IStudentRepository } from "../iRepositories.ts/iStudentRepository";

 export class StudentRepository extends BaseRepository implements IStudentRepository{
 
    
constructor(Student:Model<studentDoc>){
    super(Student)
}



 
}