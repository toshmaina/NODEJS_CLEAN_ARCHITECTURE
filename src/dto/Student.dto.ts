import { IsBoolean, IsCurrency, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsPositive, IsString } from "class-validator";

export class EditStudentDataPayloadValidator {
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsNumber()
    admissionNo:number;

    @IsOptional()
    @IsPhoneNumber('KE')
    phoneNumber: string;

    @IsOptional()
    @IsEmail()
    email:string;

    @IsOptional()
    @IsString()
    gender:string;

    @IsOptional()
    @IsNumber()
    idNo:number;
    
    @IsOptional()
    @IsString()
    courseName:string;

    @IsOptional()
    @IsString()
    branchName:string;

    @IsOptional()
    @IsString()
    courseStatus:string;

    @IsOptional()
    @IsCurrency({
        currencyCode: 'KES', 
        allowNaN: false, 
        allowEmpty: false, 
      })
    balance:number;
    
    @IsOptional()
    @IsCurrency({
        currencyCode: 'KES', 
        allowNaN: false, 
        allowEmpty: false, 
      })
    totalPayment:number
}

export class CreateStudentDataPayloadValidator {
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    admissionNo:number;

    @IsNotEmpty()
    @IsPhoneNumber('KE')
    phoneNumber: string;

    @IsNotEmpty()
    @IsEmail()
    email:string;

    @IsNotEmpty()
    @IsString()
    gender:string;

    @IsNumber()
    @IsNotEmpty()
    idNo:number;
    
    @IsString()
    @IsNotEmpty()
    courseName:string;

    @IsString()
    @IsNotEmpty()
    branchName:string;
    @IsString()
    @IsNotEmpty()
    courseStatus:string;

    @IsNotEmpty()
    @IsCurrency({
        currencyCode: 'KES', 
        allowNaN: false, 
        allowEmpty: false, 
      })
    balance:number;
    
    @IsNotEmpty()
    @IsCurrency({
        currencyCode: 'KES', 
        allowNaN: false, 
        allowEmpty: false, 
      })
    totalPayment:number
}




export class getStudentsDataPayload {
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
  export class deleteStudentPayloadValidator{
    @IsNotEmpty()
    @IsNumber()
    id:number;
  }