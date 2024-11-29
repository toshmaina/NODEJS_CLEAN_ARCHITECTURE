import mongoose, { Schema, Document, Model } from 'mongoose';

export interface paymentDoc extends Document {
    customer: string;
    referenceCode: string;
    id: number;
    amount: number;
    phoneNumber: string;
    status: string;
    modeOfPayment: string;
    studentAdmissionNumber: number;
    branch: string

}

export const PaymentSchema = new Schema({
    referenceCode: { type: String, required: true },
    id: { type: Number, required: true },
    amount: { type: Number, required: true },
    phoneNumber: { type: String, required: true },
    status: { type: String, required: true },
    modeOfPayment: { type: String, required: true },
    studentAdmissionNumber: { type: Number, required: true },
    branch: { type: String, required: true },
    dateOfPayment: {type: Date, required:true }
 
});


const Payment = mongoose.model<paymentDoc>('payment', PaymentSchema);

export { Payment }