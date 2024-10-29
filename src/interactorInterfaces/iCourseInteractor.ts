import { IBaseResourceInteractor } from "./iBaseInteractor";

export interface  CoursePayload {
    id: number;
    name: string;
    cost: number;
    code: string;
    duration: string;
    noOfPracticals: number;
}



export interface CoursesDescription{
    pageSize: number,
    pageNum: number,
    orderByColumn: string,
    isAsc: string
  }
export interface ICourseInteractor extends IBaseResourceInteractor{
       
}