import { branchDoc, branchDoc as BranchPayloadType, courseDoc, instructorDoc, studentDoc } from "../entities ";
import { carDoc } from "../entities /Car";
import { paymentDoc } from "../entities /Payment";
import { userDoc } from "../entities /User";
import { widgetDoc } from "../entities /Widget";

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

export interface IBaseRepository{
  create(payload: Record<string,any>);
  get(dataDescription:InitData);
  update(branchPayload:Record<string,any>);
  delete(id:number);
}
export type TModel = branchDoc | instructorDoc | carDoc | courseDoc | paymentDoc | studentDoc | userDoc | widgetDoc 