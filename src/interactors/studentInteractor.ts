import { IStudentInteractor } from "../interactorInterfaces/iStudentInteractor";
import { BaseRepository } from "../repositories/baseRepository";
import { BaseResourceInteractor } from "./baseInteractor";

export class StudentInteractor extends BaseResourceInteractor  implements IStudentInteractor {
    constructor(repository: BaseRepository){
        super(repository)
    }
}