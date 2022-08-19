import { UserEntity } from "./user.entity";

export interface UserRepository {
    findUserById(uuid: string): Promise<UserEntity | null>;
    registerUser({name, email, description}:{name: string, email: string, description: string}):Promise<UserEntity | null>;
    listUser():Promise<UserEntity[] | null>
}