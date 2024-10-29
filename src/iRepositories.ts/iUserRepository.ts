import { IBaseRepository } from "./iBaseRepository";



export interface IUserSignInPayload{
    userLoginName: string ;
    password: string
}
export interface IUserRepository extends IBaseRepository{
    signIn(payload:IUserSignInPayload);
    signOut()
}