import { IBaseResourceInteractor } from "./iBaseInteractor";


export interface  BranchPayload {
name: string;
id: number;
code: string;
phoneNumber: string;
location: string;
}

export interface BranchesDescription{
    pageSize: number,
    pageNum: number,
    orderByColumn: string,
    isAsc: string
  }
export interface IBranchInteractor extends IBaseResourceInteractor {

}