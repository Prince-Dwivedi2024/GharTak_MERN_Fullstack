import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRouter.js'
import workerRouter from './routes/workerRoute.js'
import userRouter from './routes/userRoute.js'  //dkjndf

// ✅ First, create the Express app
const app = express()

// ✅ Define allowed frontend origins (like Vercel)
const allowedOrigins = ['https://ghar-tak-mern-fullstack.vercel.app', 'https://ghartakadminpanel.vercel.app']

// ✅ Then, use CORS with allowed origin
app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}))

// ✅ Port setup
const port = process.env.PORT || 4000

// ✅ Connect to database and cloudinary
connectDB()
connectCloudinary()

// ✅ Middleware
app.use(express.json())

// ✅ Routers
app.use('/api/admin', adminRouter)
app.use('/api/worker', workerRouter)
app.use('/api/user', userRouter)

app.get('/', (req, resp) => {
  resp.send('API WORKING: The Prince')
})

// ✅ Start server
app.listen(port, () => console.log("Server Started on port", port))
