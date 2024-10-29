import { BaseResourceInteractor } from "./baseInteractor";
import { ICourseInteractor } from "../interactorInterfaces/iCourseInteractor";
import { IBaseRepository } from "../iRepositories.ts/iBaseRepository";

export class CourseInteractor extends BaseResourceInteractor  implements ICourseInteractor {
    constructor(repository: IBaseRepository){
        super(repository)
    }
}