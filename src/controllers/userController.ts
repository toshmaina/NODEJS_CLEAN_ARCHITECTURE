import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response } from "express";
import { IUserInteractor } from "../interactorInterfaces/iUserInteractor";
import { CreateUserDataPayloadValidator, deleteUserPayloadValidator, EditUserDataPayloadValidator, getUsersDataPayload, SignInUserDataPayloadValidator } from "../dto/User.dto";
import { IUserModel } from "../models/iUserModel";
import { comparePasswords, GeneratePassword, GenerateSalt, GenerateSignature, ValidatePassword } from "../utilites/PasswordUnility";
import { User } from "../entities /User";
import { BulkCountryUpdatePage } from "twilio/lib/rest/voice/v1/dialingPermissions/bulkCountryUpdate";
import bcrypt from 'bcrypt';
import convertParamObjectToNativeObject from "../utilites/handleParamObject";


export class UserController implements IUserModel {
    
    constructor(private interactor: IUserInteractor) {
        
    }
    private async validateInputPayload({payload,validator}){
        const inputPayload = plainToClass(validator, payload);
        return  await validate(inputPayload, {validationError: { target: true}})
    }

   public async  signInUser(req: Request, res: Response) {
    
        const signInDataPayload = req.body;
        const validationError = await this.validateInputPayload({payload:signInDataPayload,validator: SignInUserDataPayloadValidator})
        if(validationError.length) return res.status(400).json(validationError)
        const signInUserResponse = await this.interactor.signIn(signInDataPayload) 
     console.log(signInUserResponse.userNo)
        if(!signInUserResponse) return res.json({message:"Wrong UserName or password!"});
         const {password: enteredPassword} = signInDataPayload;
        const {password: savedPassword,userNo,userRole,userTrueName,userLoginName} = signInUserResponse;
        const isPasswordValid =  await comparePasswords(enteredPassword,savedPassword)
       if(!isPasswordValid) return res.json({message:"Invalid Password"})
        
        const Authorization = await GenerateSignature({
            userNo,userTrueName,userLoginName,userRole
        })

        return res.status(200).json({
            Authorization,
            userRole,
            userTrueName
        })



    }

   
   public async createUser(req: Request, res: Response) {
        const UserPayload = req.body;
        const validationError = await this.validateInputPayload({payload:UserPayload,validator: CreateUserDataPayloadValidator})
        if(validationError.length) return res.status(400).json(validationError)
        const createUserReponse = await this.interactor.createResource(UserPayload)
    //Add the conflict exception
       // if(createUserReponse === "conflict") return res.sendStatus(400)
        if(!createUserReponse) return res.json({message:"Could not create  the User!"});
       return res.status(200).json(createUserReponse);
    }
   public async updateUser(req: Request, res: Response) {
        const UserPayload = req.body;
     const validationError = await this.validateInputPayload({payload:UserPayload,validator:EditUserDataPayloadValidator})
        if(validationError?.length) return res.status(400).json(validationError)
        const  updateUserResponse = await  this.interactor.updateResource(UserPayload);
        if(!updateUserResponse.code) return res.json({message:"Could not update the User!"})
       return res.status(200).json({message:"Updated the User successfully"})
    }
   public async  getUsers(req: Request, res: Response) {
    const {...usersPayloadParamObject} = req.query
    const usersPayloadNativeObject = convertParamObjectToNativeObject(usersPayloadParamObject)
    if(!usersPayloadNativeObject) return res.sendStatus(400)
    const validationError = await this.validateInputPayload({payload:usersPayloadNativeObject,validator:getUsersDataPayload})
   if(validationError?.length) return res.status(400).json(validationError)
    const  getUsersResponse = await  this.interactor.getResources(usersPayloadNativeObject)
        if(!getUsersResponse) return res.json({message:"Could not get User!"})
       return res.status(200).json(getUsersResponse)
    }
    public async deleteUser(req: Request, res: Response) {
        const UserPayload = req.body?.id;
        const validationError = await this.validateInputPayload({payload:UserPayload,validator:deleteUserPayloadValidator})
       if(validationError?.length) return res.status(400).json(validationError)
        const deleteResponse = (await this.interactor.deleteResource(UserPayload))
       if(!deleteResponse) return   res.json({message:"Could not update the User!"})
        return res.status(200).json({message:"User deleted successfully"})
    }
}