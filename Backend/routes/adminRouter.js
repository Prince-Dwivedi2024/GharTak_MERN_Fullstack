import express from 'express'
import { addWorker, allWorkers, loginAdmin } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js'
import { changeAvailability } from '../controllers/workerController.js'

const adminRouter = express.Router()

adminRouter.post('/addWorker', authAdmin, upload.single('image'), addWorker)
adminRouter.post('/login', loginAdmin)
adminRouter.post('/allWorkers', authAdmin, allWorkers)
adminRouter.post('/change-availability', authAdmin, changeAvailability)


export default adminRouter