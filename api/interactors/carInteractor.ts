import { ICarInteractor } from "../interactorInterfaces/iCarInteractor";
import { IBaseRepository } from "../iRepositories.ts/iBaseRepository";
import { BaseResourceInteractor } from "./baseInteractor";

export class CarInteractor extends BaseResourceInteractor  implements ICarInteractor {
    constructor(repository:IBaseRepository){
        super(repository)
    }
}