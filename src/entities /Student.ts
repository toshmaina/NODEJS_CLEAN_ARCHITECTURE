import mongoose, { Schema, Document, Model } from 'mongoose';

export interface studentDoc extends Document {
    id:string,
    name:string,
    admissionNo:number,
    phoneNumber:string,
    email:string,
    gender:string,
    idNo:number,
    courseName:string,
    branchName:string,
    courseStatus:string,
    balance:string,
    totalPayment:string
}


export const StudentSchema = new Schema({
    id:{type: Number, required: true},
    name: {type: String, required: true},
    idNo:  {type: Number, required: true},
    admissionNo:  {type: Number, required: true},
    phoneNumber: {type: String, required: true},
    email:String,
    courseName: {type: String, required: true},
    branchName: {type: String, required: true},
    courseStatus: {type: String, required: true},
    totalPayment: {type: Number, required: true},
    balance: {type: Number, required: true},
});


const Student = mongoose.model<studentDoc>('student', StudentSchema);

export { Student }