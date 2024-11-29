import mongoose, { Schema, Document, Model } from 'mongoose';


export interface branchDoc extends Document {

    name: string;
    id: number;
    code: string;
    phoneNumber: string;
    location: string;
}


export const BranchSchema = new Schema({
    name:{ type: String, required: true},
    id: { type: Number, required: true},
    code: { type: String, required: true},
    address: { type: String},
    phoneNumber: { type: String, required: true},
    location:{ type: String, required: true},
});


const Branch = mongoose.model<branchDoc>('branch', BranchSchema);

export { Branch }