
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
    export interface ICarInteractor{
        createCar(carPayload:CarPayload);
        getCars(caresDescriptions:CarsDescription);
        updateCar(carPayload:CarPayload);
        deleteCar(id:CarPayload["id"])
    }