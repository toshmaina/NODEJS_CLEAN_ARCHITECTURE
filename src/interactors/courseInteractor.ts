import { CoursesDescription, ICourseInteractor } from "../interactorInterfaces/iCourseInteractor";
import { ICourseRepository } from "../iRepositories.ts/iCourseRepository";
import { CoursePayload } from "../interactorInterfaces/iCourseInteractor";

export class CourseInteractor implements ICourseInteractor {
    private repository : ICourseRepository
    constructor(repository:ICourseRepository) {
        this.repository = repository
    }
    public  createCourse(CoursePayload: CoursePayload) {
       return  this.repository.create(CoursePayload)
    }
    public  getCourses(CoursesDescriptions: CoursesDescription) {
       return   this.repository.get(CoursesDescriptions);
    }
    public  updateCourse(CoursePayload: CoursePayload) {
        return  this.repository.update(CoursePayload)
    }
    public deleteCourse(id:number){
        return this.repository.delete(id)
    }
}