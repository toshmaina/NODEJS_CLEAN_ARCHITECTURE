import mongoose, { Schema, Document, Model } from 'mongoose';


export interface courseDoc extends Document {
    id: number;
    name: string;
    cost: number;
    code: string;
    duration: string;
    noOfPracticals: number;
}


export const CourseSchema = new Schema({
    id: {type: Number, required: true},
    name: {type: String, required: true},
    cost: {type: Number, required: true},
    code: {type: String,required :true},
    duration: {type: String,required : true},
    noOfPracticals:{type: Number,required : true},
     
});


const Course  = mongoose.model<courseDoc>('course', CourseSchema);

export { Course }