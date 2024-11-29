import { Model } from "mongoose";
import { IBranchRepository } from "../iRepositories.ts/iBranchRepository";
import { BaseRepository } from "./baseRepository";
import { branchDoc } from "../entities ";

 export class BranchRepository extends BaseRepository implements IBranchRepository {
    //protected Database =  
    constructor(Branch:Model<branchDoc>){
        super(Branch)
        /* Connects to the database only once! */
        BaseRepository.connectToDatabase();
    } 
}