import { IUserInteractor, IUserPayload } from "../interactorInterfaces/iUserInteractor";
import { IUserRepository, IUserSignInPayload } from "../iRepositories.ts/iUserRepository";
import { BaseRepository } from "../repositories/baseRepository";
import { BaseResourceInteractor } from "./baseInteractor";

export class UserInteractor extends BaseResourceInteractor  implements IUserInteractor {
    constructor(public repository: IUserRepository) {
        super(repository)
       
      }
    public async signIn(payload: IUserSignInPayload) {
        return await this.repository.signIn(payload)
     }
}