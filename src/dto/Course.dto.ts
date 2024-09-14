import { IsNotEmpty, IsNumber, IsPositive, IsBoolean, IsString, IsCurrency, Matches, IsOptional } from "class-validator";

export class getCoursesDataPayload {
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
  export class deleteCoursePayloadValidator{
    @IsNotEmpty()
    @IsNumber()
    id:number;
  }



  
  export class CreateCourseDataPayloadValidator {
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    id: number;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsCurrency({
        currencyCode: 'KES', 
        allowNaN: false, 
        allowEmpty: false, 
      })
    cost: number;

    @IsString()
    @IsNotEmpty()
    code: string;

    @IsString()
    @Matches(/^\d+ (month|year|week)s?$/, { message: 'Duration must be in the format "X months" , "X years" or "X weeks.' })
    duration: string;

    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    noOfPracticals: number;
  }
  export class EditCourseDataPayloadValidator {
    @IsNumber()
    @IsOptional()
    @IsPositive()
    id: number;

    @IsOptional()
    @IsString()
    name: string;
    
    @IsOptional()
    @IsCurrency({
        currencyCode: 'KES', 
        allowNaN: false, 
        allowEmpty: false, 
      })
    cost: number;

    @IsString()
    @IsOptional()
    code: string;

    @IsString()
    @IsOptional()
    @Matches(/^\d+ (month|year|week)s?$/, { message: 'Duration must be in the format "X months" , "X years" or "X weeks.' })
    duration: string;
    
    @IsNumber()
    @IsPositive()
    @IsOptional()
    noOfPracticals: number;
  }