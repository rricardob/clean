//capa infraestructura
import { UserEntity } from "../../domain/user.entity";
import { UserRepository } from "../../domain/user.repository";
import { getAllUsers, registerUser } from "../model/user.mysql";


export class MysqlRepository implements UserRepository {
    async findUserById(_uuid: string): Promise<any | null> {
        return null
    }
    async registerUser(userIn: UserEntity): Promise<any | null> {
        const user = registerUser(userIn)
        return user
    }
    async listUser(): Promise<any | null> {
        const user = getAllUsers()
        return user
    }
    
}