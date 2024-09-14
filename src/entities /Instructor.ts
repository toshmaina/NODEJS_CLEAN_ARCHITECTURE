import mongoose, { Schema, Document, Model } from 'mongoose';



export interface instructorDoc extends Document {
    userNo: number;
    password: string;
    userLoginName: string;
    userTrueName: string;
    userRole: string;
}


export const InstructorSchema = new Schema({
    userNo: {type: Number, required: true},
    password:  {type: String, required: true},
    userLoginName:  {type: String,required: true},
    userTrueName: {type: String,required: true},
    userRole: {type: String,required: true},
});


const Instructor = mongoose.model<instructorDoc>('InstructorUser', InstructorSchema);

export { Instructor }