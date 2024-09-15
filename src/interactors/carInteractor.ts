
import { CarsDescription, ICarInteractor,CarPayload } from "../interactorInterfaces/iCarInteractor";
import { ICarRepository } from "../iRepositories.ts/iCarRepository";

export class CarInteractor implements ICarInteractor {
    private repository : ICarRepository
    constructor(repository:ICarRepository) {
        this.repository = repository
    }
    public  createCar(carPayload: CarPayload) {
       return  this.repository.create(carPayload)
    }
    public  getCars(CaresDescriptions: CarsDescription) {
       return   this.repository.get(CaresDescriptions);
    }
    public  updateCar(carPayload: CarPayload) {
        return  this.repository.update(carPayload)
    }
    public deleteCar(id:CarPayload["id"]){
        return this.repository.delete(id)
    }
}