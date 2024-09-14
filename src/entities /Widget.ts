import { InstructorSchema } from "./Instructor";
import { CourseSchema } from "./Course";
import { CarSchema } from "./Car";
import { PaymentSchema } from "./Payment";
import { StudentSchema } from "./Student";
import { BranchSchema } from "./Branch";
import { UserSchema } from "./User";

import mongoose, { Schema, Document, Model } from 'mongoose';


export interface widgetDoc extends Document {
    branches: {
        branchId: number;
        branchName: string;
        location: string;
        contactNumber: string;
        managerId: number;
    }[];
    instructors: {
        instructorId: number;
        name: string;
        phoneNumber: string;
        email: string;
        branchId: number;
        coursesTaught: number[];
    }[];
    students: {
        studentId: number;
        name: string;
        admissionNumber: number;
        phoneNumber: string;
        email: string;
        branchId: number;
        enrolledCourses: number[];
        instructorId?: number;
    }[];
    vehicles: {
        vehicleId: number;
        registrationNumber: string;
        model: string;
        type: string;
        branchId: number;
        instructorId?: number;
    }[];
    users: {
        userNo: number;
        password: string;
        userLoginName: string;
        userTrueName: string;
        userRole: string;
        branchId?: number;
    }[];
    courses: {
        courseId: number;
        name: string;
        cost: number;
        code: string;
        duration: string;
        noOfPracticals: number;
        branchId?: number;
    }[];
    payments: {
        paymentId: number;
        referenceCode: string;
        studentId: number;
        amount: number;
        modeOfPayment: string;
        dateOfPayment: Date;
        status: string;
    }[];
    managers: {
        managerId: number;
        name: string;
        phoneNumber: string;
        email: string;
        branchId: number;
    }[];
}


export const WidgetSchema = new Schema({
    branches: [{
        branchId: { type: Number, required: true },
        branchName: { type: String, required: true },
        location: { type: String, required: true },
        contactNumber: { type: String, required: true },
        managerId: { type: Number, required: true },
    }],
    instructors: [{
        instructorId: { type: Number, required: true },
        name: { type: String, required: true },
        phoneNumber: { type: String, required: true },
        email: { type: String, required: true },
        branchId: { type: Number, required: true },
        coursesTaught: [{ type: Number }],
    }],
    students: [{
        studentId: { type: Number, required: true },
        name: { type: String, required: true },
        admissionNumber: { type: Number, required: true },
        phoneNumber: { type: String, required: true },
        email: { type: String, required: true },
        branchId: { type: Number, required: true },
        enrolledCourses: [{ type: Number }],
        instructorId: { type: Number },
    }],
    vehicles: [{
        vehicleId: { type: Number, required: true },
        registrationNumber: { type: String, required: true },
        model: { type: String, required: true },
        type: { type: String, required: true },  // e.g., Car, Motorcycle, Truck
        branchId: { type: Number, required: true },
        instructorId: { type: Number },
    }],
    users: [{
        userNo: { type: Number, required: true },
        password: { type: String, required: true },
        userLoginName: { type: String, required: true },
        userTrueName: { type: String, required: true },
        userRole: { type: String, required: true },  // e.g., Admin, Instructor, Student, Manager
        branchId: { type: Number },
    }],
    courses: [{
        courseId: { type: Number, required: true },
        name: { type: String, required: true },
        cost: { type: Number, required: true },
        code: { type: String, required: true },
        duration: { type: String, required: true },
        noOfPracticals: { type: Number, required: true },
        branchId: { type: Number },
    }],
    payments: [{
        paymentId: { type: Number, required: true },
        referenceCode: { type: String, required: true },
        studentId: { type: Number, required: true },
        amount: { type: Number, required: true },
        modeOfPayment: { type: String, required: true },  // e.g., Mpesa, Bank Transfer, Cash
        dateOfPayment: { type: Date, required: true },
        status: { type: String, required: true },  // e.g., Paid, Pending, Failed
    }],
    managers: [{
        managerId: { type: Number, required: true },
        name: { type: String, required: true },
        phoneNumber: { type: String, required: true },
        email: { type: String, required: true },
        branchId: { type: Number, required: true },
    }],

});


const Widget  = mongoose.model<widgetDoc>('widget', WidgetSchema);

export { Widget }