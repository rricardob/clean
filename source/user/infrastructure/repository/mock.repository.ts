//capa infraestructura
import { UserEntity } from "../../domain/user.entity";
import { UserRepository } from "../../domain/user.repository";

const MOCK_USER = {
  name: 'ricardo',
  email: 'edada0,',
  description: 'asdasda'
}

export class MockRepository implements UserRepository {
    async findUserById(_uuid: string): Promise<any | null> {
        const user = MOCK_USER
        return user
    }
    async registerUser(_userIn: UserEntity): Promise<any | null> {
        const user = MOCK_USER
        return user
    }
    async listUser(): Promise<any | null> {
        const user = [MOCK_USER,MOCK_USER,MOCK_USER]
        return user
    }
    
}