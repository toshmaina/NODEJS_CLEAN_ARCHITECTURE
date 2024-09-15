
import { IStudentInteractor,StudentPayload } from "../interactorInterfaces/iStudentInteractor";
import { StudentsDescription } from "../interactorInterfaces/iStudentInteractor";
import { IStudentRepository } from "../iRepositories.ts/iStudentRepository";

export class StudentInteractor implements IStudentInteractor {
    private repository : IStudentRepository
    constructor(repository:IStudentRepository) {
        this.repository = repository
    }
    public  createStudent(StudentPayload: StudentPayload) {
       return  this.repository.create(StudentPayload)
    }
    public  getStudents(StudentesDescriptions: StudentsDescription) {
       return   this.repository.get(StudentesDescriptions);
    }
    public  updateStudent(StudentPayload: StudentPayload) {
        return  this.repository.update(StudentPayload)
    }
    public deleteStudent(id:StudentPayload["id"]){
        return this.repository.delete(id)
    }
}