import { BaseRepository } from "./baseRepository";
import { ICourseRepository } from "../iRepositories.ts/iCourseRepository";
import { Model } from "mongoose";
import { courseDoc } from "../entities /Course";

 export class CourseRepository extends BaseRepository implements ICourseRepository{
 
    
constructor(Course:Model<courseDoc>){
    super(Course)
}



 
}