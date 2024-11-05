import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { IsPositive } from "class-validator";
import { IsEmpty } from "class-validator";
import { Length,IsPhoneNumber, IsNumber } from "class-validator";

export class EditBranchDataPayloadValidator {
    @IsOptional()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsOptional()
    @IsString()
    code: string;

    @IsOptional()
    @IsPhoneNumber('KE')
    phoneNumber: string;

    @IsOptional()
    @IsString()
    location: string;
}

export class getBranchesDataPayload {
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
  export class createBranchDataPayloadValidator {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    id: number;

    @IsString()
    @IsNotEmpty()
    code: string;

    @IsNotEmpty()
    @IsPhoneNumber('KE')
    phoneNumber: string;

    @IsString()
    @IsNotEmpty()
    location: string;
}
export class deleteBranchPayloadValidator{
  @IsNotEmpty()
  @IsNumber()
  id:number;
}