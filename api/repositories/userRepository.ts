import { BaseRepository } from "./baseRepository";
import {  IUserRepository, IUserSignInPayload } from "../iRepositories.ts/iUserRepository";
import { Model } from "mongoose";
import { userDoc } from "../entities /User";

 export class UserRepository extends BaseRepository implements IUserRepository{
 
    
constructor(public readonly User:Model<userDoc>){
    super(User)
}
    public async  signIn(payload: IUserSignInPayload) {
        const {userLoginName} = payload;
         try {
           return await this.getByName(userLoginName);

         } catch (error) {
            console.error(error.message)
         }
     }
     public async  signOut() {
         throw new Error("Method not implemented.");
     }



 
}