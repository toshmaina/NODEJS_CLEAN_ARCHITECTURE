import { IBaseResourceInteractor, ResourcePayload, ResourcesDescription } from "../interactorInterfaces/iBaseInteractor";
import { IBaseRepository } from "../iRepositories.ts/iBaseRepository";

export abstract class BaseResourceInteractor implements IBaseResourceInteractor {
    protected  repository : IBaseRepository
    constructor(repository:IBaseRepository) {
        this.repository = repository
    }
    public  createResource(resourcePayload: ResourcePayload) {
       return  this.repository.create(resourcePayload)
    }
    public  getResources(resourcesDescriptions: ResourcesDescription) {
       return   this.repository.get(resourcesDescriptions);
    }
    public  updateResource(resourcePayload: ResourcePayload) {
        return  this.repository.update(resourcePayload)
    }
    public deleteResource(id:ResourcePayload["id"]){
        return this.repository.delete(id)
    }
}