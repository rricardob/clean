import 'dotenv/config'
import express from 'express' // EsModules
import diaryRouter from './routes/diaries'

const app = express()
// app.use(cors())
app.use(express.json())

const port = process.env.PORT ?? 8001

app.get('/ping', (_, res) => {
  console.log('ping here ')
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(port, () => console.log(`listo por el puerto ${port}`))
