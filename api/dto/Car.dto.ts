import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsObject, IsOptional, IsPositive, IsString } from "class-validator";

export class getCarsDataPayload {
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    pageSize: number;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    pageNum: number;

    @IsNotEmpty()
    @IsBoolean()
    orderByColumn: boolean;

    @IsNotEmpty()
    @IsBoolean()
    isAsc: boolean;
  }
  export class deleteCarPayloadValidator{
    @IsNotEmpty()
    @IsNumber()
    id:number;
  }



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


  export class EditCarDataPayloadValidator {
    @IsOptional()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsString()
    @IsOptional()
    make: string;

    @IsOptional()
    @IsString()
    carModel: string;

    @IsNumber()
    @IsOptional()
    year: number;

    @IsNumber()
    @IsOptional()
    color: string;

    @IsString()
    @IsOptional()
    bodyType: string;

    @IsOptional()
    @IsObject()
    engine: Record<"displacement" | "fuelType" | "horsepower" , string | number>

    @IsString()
    @IsOptional()
    trasmission: "automatic" | "manual";

    @IsOptional()
    @IsObject()
    fuelEfficiency: Record<"city" | "highway" , number | string>

    @IsNumber()
    @IsOptional()
    seatingCapacity: number;

    @IsArray()
    @IsOptional()
    @IsString({ each: true })
    safetyFeatures: string[];

    @IsArray()
    @IsOptional()
    @IsString({ each: true })
    entertainmentSystem: string[];

}


export class CreateCarDataPayloadValidator {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsString()
    @IsNotEmpty()
    make: string;

    @IsNotEmpty()
    @IsString()
    carModel: string;

    @IsNumber()
    @IsNotEmpty()
    year: number;

    @IsNumber()
    @IsNotEmpty()
    color: string;

    @IsString()
    @IsNotEmpty()
    bodyType: string;

    @IsNotEmpty()
    @IsObject()
    engine: Record<"displacement" | "fuelType" | "horsepower" , string | number>

    @IsString()
    @IsNotEmpty()
    trasmission: "automatic" | "manual";

    @IsNotEmpty()
    @IsObject()
    fuelEfficiency: Record<"city" | "highway" , number | string>

    @IsNumber()
    @IsNotEmpty()
    seatingCapacity: number;

    @IsArray()
    @IsNotEmpty()
    @IsString({ each: true })
    safetyFeatures: string[];

    @IsArray()
    @IsNotEmpty()
    @IsString({ each: true })
    entertainmentSystem: string[];

}


