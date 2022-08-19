// importar conexion y crear metodos CRUD
import { UserEntity } from "../../domain/user.entity";
import { dbconnection as sql } from "../db/mysql";

export const getAllUsers = () => {
    const query = `select * from users`
    return new Promise<any>((resolve, reject) => {
        sql.query(query, (err, res) => {
            if (err) {
                reject(err)
                // throw new Error('no se pudo recuperar la informacion de los usuarios')
            }

            resolve(res)
        });
    });

}

export const registerUser = (userIn: UserEntity) => {

    const query = ` insert into users (name, email, descripcion, uuid) 
    values('${userIn.name}', '${userIn.email}', '${userIn.description}', '${userIn.uuid}'); `
    return new Promise<any>((resolve, reject) => {
        sql.query(query, (err, res) => {
            if (err) {
                reject(err)
                //throw new Error('no se pudo registrar la informacion del usuario')
            }

            resolve(res)
        })
    })
}

