import express from 'express'
import { addWorker, loginAdmin } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js'

const adminRouter = express.Router()

adminRouter.post('/addWorker', authAdmin, upload.single('image'), addWorker)
adminRouter.post('/login', loginAdmin)

export default adminRouter