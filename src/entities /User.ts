import mongoose, { Schema, Document, Model } from 'mongoose';

export interface userDoc extends Document {
    userName: string;
    password: string;
}


export const UserSchema = new Schema({
    userName: {type: String, required: true},
    password:  {type: String, required: true},
});


const User = mongoose.model<userDoc>('user', UserSchema);

export { User }