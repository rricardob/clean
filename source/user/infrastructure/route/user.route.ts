import { Router } from 'express'
import { UserUseCase } from '../../application/UserUseCase'
import { UserController } from '../controller/user.ctrl'
//import { MockRepository } from '../repository/mock.repository'
import { MysqlRepository } from '../repository/mysql.repository'

const route = Router()

const UserRepository = new MysqlRepository

/**
 * iniciar casos de uso
 */

const userUseCase = new UserUseCase(UserRepository)

/**
 * iniciar user controller
 */

const userCtrl = new UserController(userUseCase)

/**
 * definir ruta
 */

route.post('/user', userCtrl.insertCtrl)
route.get('/user', userCtrl.getAll)

export default route

