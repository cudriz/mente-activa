import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from './docs/swagger.js'
import userRoutes from './routes/userRoutes.js'
import habitRoutes from './routes/habitRoutes.js'
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
)

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Base de datos conectada'))
  .catch(err => console.log(err))

app.use('/api/users', userRoutes)


app.use('/api/habits', habitRoutes)

export default app