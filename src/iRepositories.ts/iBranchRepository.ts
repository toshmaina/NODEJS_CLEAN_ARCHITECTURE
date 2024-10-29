import { IBaseRepository } from "./iBaseRepository";

export interface InitData{
    pageSize: number,
    pageNum: number,
    orderByColumn: string,
    isAsc: string
  }
  export interface  BranchData {
    name: string;
    id: number;
    code: string;
    phoneNumber: string;
    location: string;
}
export interface IBranchRepository extends IBaseRepository{}
