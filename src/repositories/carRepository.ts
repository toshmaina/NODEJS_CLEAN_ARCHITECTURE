import { BaseRepository } from "./baseRepository";
import { ICarRepository } from "../iRepositories.ts/iCarRepository";
import { TModel } from "../iRepositories.ts/iBranchRepository";
import { Model } from "mongoose";
import { carDoc } from "../entities /Car";

 export class CarRepository extends BaseRepository implements ICarRepository{
 
    
constructor(Car:Model<carDoc>){
    super(Car)
}



 
}