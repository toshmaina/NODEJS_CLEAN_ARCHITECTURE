import { BranchPayload } from "./iBranchInteractor";
import { CarPayload } from "./iCarInteractor";
import { CoursePayload } from "./iCourseInteractor";
import { StudentPayload } from "./iStudentInteractor";


export type ResourcePayload = BranchPayload | CarPayload | CoursePayload | StudentPayload;

    
    export interface ResourcesDescription{
        pageSize: number,
        pageNum: number,
        orderByColumn: string,
        isAsc: string
      }
    export interface IBaseResourceInteractor{
        createResource(ResourcePayload:ResourcePayload);
        getResources(ResourcesDescriptions:ResourcesDescription);
        updateResource(ResourcePayload:ResourcePayload);
        deleteResource(id:ResourcePayload["id"])
    }