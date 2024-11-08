import { plainToClass } from "class-transformer";
import { IBranchInteractor } from "../interactorInterfaces/iBranchInteractor";
import { createBranchDataPayloadValidator, deleteBranchPayloadValidator, EditBranchDataPayloadValidator, getBranchesDataPayload } from "../dto/Branch.dto";
import { validate } from "class-validator";
import { IBranchModel } from "../models/iBranchModel";
import { Request, Response } from "express";
import convertParamObjectToNativeObject from "../utilites/handleParamObject";

export class BranchController implements IBranchModel {
    private interactor: IBranchInteractor
    constructor(interactor:IBranchInteractor) {
        this.interactor = interactor;  
    }

    private async validateInputPayload({payload,validator}){
        const inputPayload = plainToClass(validator, payload);
        return  await validate(inputPayload, {validationError: { target: true}})
    }
   public async createBranch(req: Request, res: Response) {
        const branchPayload = req.body;
        const validationError = await this.validateInputPayload({payload:branchPayload,validator:createBranchDataPayloadValidator})
        if(validationError?.length) return res.status(400).json(validationError)
        const createBranchReponse = await this.interactor.createResource(branchPayload)
    //Add the conflict exception
       // if(createBranchReponse === "conflict") return res.sendStatus(400)
        if(!createBranchReponse) return res.json({message:"Could not create  the User!"});
       return res.status(200).json(createBranchReponse);
    }
   public async updateBranch(req: Request, res: Response) {
        const {id, ...otherKeys} = req.body;
        const branchPayload = {id:+id ,...otherKeys};
        if(!branchPayload) return res.sendStatus(400);
     const validationError = await this.validateInputPayload({payload:branchPayload,validator:EditBranchDataPayloadValidator})
     console.log(validationError)
        if(validationError?.length) return res.status(400).json(validationError)
            //response should handle the 404 status situations passed in the repository
        const  updateUserResponse = await  this.interactor.updateResource(branchPayload);
        if(!updateUserResponse.code) return res.json({message:"Could not update the User!"})
       return res.status(200).json({message:"Updated the user successfully"})
    }
   public async  getBranches(req: Request, res: Response) {
        const {...branchPayloadParamObject} = req.query;
        if(!branchPayloadParamObject) return res.sendStatus(400);
        var branchPayloadNativeObject = convertParamObjectToNativeObject(branchPayloadParamObject);
        const validationError = await this.validateInputPayload({payload:branchPayloadNativeObject,validator:getBranchesDataPayload})
       if(validationError?.length) return res.status(400).json(validationError)
        const  getBranchesResponse = await  this.interactor.getResources(branchPayloadNativeObject)
        if(!getBranchesResponse) return res.json({message:"Could not get Branches!"})
       return res.status(200).json(getBranchesResponse)
    }
    public async deleteBranch(req: Request, res: Response) {
        const {...branchPayloadParamObject} = req.query;
        if(!branchPayloadParamObject.id) return res.sendStatus(400);
        const  {id:branchId} = convertParamObjectToNativeObject(branchPayloadParamObject);
        const validationError = await this.validateInputPayload({payload:branchId,validator:deleteBranchPayloadValidator})
       if(validationError?.length) return res.status(400).json(validationError)
        const deleteResponse = (await this.interactor.deleteResource(branchId))
       if(!deleteResponse) return   res.json({message:"Could not delete the User!"})
        return res.status(200).json({message:"User deleted successfully"})
    }
}