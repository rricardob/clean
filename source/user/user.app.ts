import "dotenv/config"
import express from 'express'
import cors from 'express'
import userRoute from './infrastructure/route/user.route'
// import dbInit from "./infrastructure/db/mongo"
import {conectarMysql} from "./infrastructure/db/mysql"

const app = express()
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3001

app.use(userRoute)
// dbInit().then()
conectarMysql()
app.listen(port, () => console.log(`listo en el puerto ${port}`))