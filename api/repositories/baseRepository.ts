
import { IBaseRepository, TModel, InitData } from "../iRepositories.ts/iBaseRepository";
import dbConnection from "../services/Database";
import mongoose, { Model,MongooseError } from "mongoose";



 export  abstract class BaseRepository implements IBaseRepository {
    //protected Database = 
   // private  hasConnectedToDatabase: boolean; 
   private static hasConnectedToDatabase: boolean = false;

    protected static async connectToDatabase (){
        if (!this.hasConnectedToDatabase) {
            await dbConnection()
            this.hasConnectedToDatabase = true;
        }
    };

    constructor(protected readonly Model:Model<TModel> ){
        //code runs everytime the class is instantiated!
         
    }

   protected  async getById(id: number){
    try {
        return await this.Model.findOne({id : id});
    } catch (error) {
        console.error(error.message)
    }
   }
   protected  async   getByName(name: string){
    try {
        return await this.Model.findOne({userLoginName:name})
    } catch (error) {
        console.error(error.message)
    }
   }
   protected  async getByPassword(password: string){
    try {
        return await this.Model.findOne({password});
    } catch (error) {
        console.error(error.message)
    }
   }
   public async get({isAsc, pageNum,pageSize:limit}:InitData) {
    //gets all the documents with pagination
    const orderWay  = isAsc ? 1 : -1;
        try {
             return await this.Model.find().sort({ name: orderWay }).skip(limit * (pageNum - 1) ).limit(limit)
        } catch (error) {
           console.error(error.message)
        }
    }
    public async create(payload:Record<string,any>) {
             try {
                const resourceExits = await this.getById(payload.id);
               if(resourceExits) return { error: 'Document with the same id already exists', statusCode: 409 };
                return  await this.Model.create(payload);
            } catch (error) {
             console.error(error.message)
              }  
     }

     public async update(payload:Record<string,any>) {
        const {id} = payload as Record<string,any>
        try {
            return  await this.Model.findOneAndUpdate({id},{$set:payload}).exec()
        } catch (error) {
            console.error(error.message)
        }
     } 
    public async  delete(id: number) {
        try {
          return  await this.Model.findOneAndDelete({id: id}).exec();
            
        } catch (error) {
            console.error(error.message)
        }
      
    }
}