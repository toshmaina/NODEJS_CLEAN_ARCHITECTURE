import { IBaseResourceInteractor } from "./iBaseInteractor";

export interface UsersDescription{
    pageSize: number,
    pageNum: number,
    orderByColumn: string,
    isAsc: string
  }

  export interface IUserPayload{
    userLoginName: string;
    userNo: string;
    password: string;
    userRole: string;
    userTrueName: string;
  }
  export interface IUserInteractor extends IBaseResourceInteractor{
       signIn(payload:IUserPayload)
  }