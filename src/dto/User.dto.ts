import { IsNotEmpty, IsNumber, IsPositive, IsBoolean, IsString, IsCurrency, Matches, IsOptional } from "class-validator";

export class getUsersDataPayload {
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
  export class deleteUserPayloadValidator{
    @IsNotEmpty()
    @IsNumber()
    id:number;
  }
  export class CreateUserDataPayloadValidator {
    @IsNotEmpty()
    @IsNumber()
    userNo: number;

    @IsNotEmpty()
    @IsString()
    userLoginName: string;

    @IsNotEmpty()
    @IsString()
    userTrueName: string;

    @IsNotEmpty()
    @IsString()
    userRole: string;

    @IsNotEmpty()
    @IsString()
    password: string;


    
}
export class EditUserDataPayloadValidator {
    @IsNotEmpty()
    @IsNumber()
    userNo: number;

    @IsOptional()
    @IsString()
    userLoginName: string;

    @IsOptional()
    @IsString()
    userTrueName: string;

    @IsOptional()
    @IsString()
    userRole: string;

    @IsOptional()
    @IsString()
    password: string;


    
}

export class SignInUserDataPayloadValidator {
    @IsNotEmpty()
    @IsString()
    userLoginName: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}
