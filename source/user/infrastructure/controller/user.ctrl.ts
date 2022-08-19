import { Request, Response } from "express";
import { UserUseCase } from "../../application/UserUseCase";

export class UserController {
    constructor(private userUseCase: UserUseCase){

    }

    public getCtrl = async (req: Request, res: Response) => {
        const { uuid = "" } = req.query
        const user = await this.userUseCase.getDetailUser(`${uuid}`)
        res.send(user)
    }

    public insertCtrl = async (req: Request, res: Response) => {
        const user = await this.userUseCase.registerUser(req.body)
        res.send(user)
    }

    public getAll = async (_req: Request, res: Response) => {
        const lst = await this.userUseCase.getAllUser()
        res.send(lst)
    }
}