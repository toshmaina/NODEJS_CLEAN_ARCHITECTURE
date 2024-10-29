import { IBaseResourceInteractor } from "./iBaseInteractor";

export interface  CarPayload {
    make: string;
    id:number;
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
    
    export interface CarsDescription{
        pageSize: number,
        pageNum: number,
        orderByColumn: string,
        isAsc: string
      }
    export interface ICarInteractor extends IBaseResourceInteractor{  }