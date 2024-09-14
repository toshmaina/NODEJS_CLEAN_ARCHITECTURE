import mongoose, { Schema, Document, Model } from 'mongoose';


export interface carDoc extends Document {
   id: string;
    make: string;
    carModel: string;
    year: number;
    color: string;
    bodyType: string;
    engine: {
      displacement: string;
      fuelType: string;
      horsepower: number;
    };
    transmission: 'automatic' | 'manual';
    fuelEfficiency: {
      city: number;
      highway: number;
    };
    seatingCapacity: number;
    safetyFeatures: string[];
    entertainmentSystem: string[];
  }
  


export const CarSchema = new Schema({
  id: {type: Number, required: true},
    make: { type: String, required: true },
    carModel: { type: String, required: true },
    year: { type: Number, required: true },
    color: { type: String, required: true },
    bodyType: { type: String, required: true },
    engine: {
      displacement: { type: String, required: true },
      fuelType: { type: String, required: true },
      horsepower: { type: Number, required: true },
    },
    transmission: { type: String, enum: ['automatic', 'manual'], required: true },
    fuelEfficiency: {
      city: { type: Number, required: true },
      highway: { type: Number, required: true },
    },
    seatingCapacity: { type: Number, required: true },
    safetyFeatures: [{ type: String }],
    entertainmentSystem: [{ type: String }],
     
});


const Car  = mongoose.model<carDoc>('car', CarSchema);

export { Car }