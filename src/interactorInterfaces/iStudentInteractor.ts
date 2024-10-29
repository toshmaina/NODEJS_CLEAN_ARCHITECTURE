import { IBaseResourceInteractor } from "./iBaseInteractor"

export interface StudentPayload {
    id:number,
    name:string,
    admissionNo:number,
    phoneNumber:string,
    email:string,
    gender:string,
    idNo:number,
    courseName:string,
    branchName:string,
    courseStatus:string,
    balance:string,
    totalPayment:string
}




export interface StudentsDescription{
    pageSize: number,
    pageNum: number,
    orderByColumn: string,
    isAsc: string
  }
export interface IStudentInteractor extends IBaseResourceInteractor{
       
}