import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRouter.js'

//app config
const app = express()
const port = process.env.PORT || 4000
//connection with database
connectDB()
//connect to cloudinary 
connectCloudinary()

//middlewares
app.use(express.json())
app.use(cors())  //allowing cross origin resource sharing(frontend and backend)

//api endpoint

app.use('/api/admin', adminRouter)

app.get('/', (req, resp)=>{
    resp.send('API WORKING:The Prince')
})

app.listen(port, ()=> console.log("Server Started", port))  