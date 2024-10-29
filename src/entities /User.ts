import mongoose, { Schema, Document, Model } from 'mongoose';

export interface userDoc extends Document {
    userLoginName: string;
    userNo: string;
    password: string;
    userRole: string;
    userTrueName: string;
}


export const UserSchema = new Schema({
    userLoginName: {type: String, required: true},
    userTrueName: {type:String,required:true},
    userNo: {type:String ,required:true},
    userRole: {type:String,required:true},
    password:  {type: String, required: true},
});


const User = mongoose.model<userDoc>('user', UserSchema);

export { User }