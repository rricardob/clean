// mapear los datos que va a ser la representacion de la entidad, middleware, dto

import { UserEntity } from "./user.entity";
import {v4 as uuid} from "uuid"

export class UserValue implements UserEntity {
  uuid: string;
  name: string;
  email: string;
  description: string;

  constructor({name, email, description}: {name:string, email:string, description:string}){
    this.uuid = uuid()
    this.email = email
    this.name = name
    this.description = description
  }

}

