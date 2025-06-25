import express from 'express'
import { addWorker, allWorkers, loginAdmin, appointmentsAdmin, appointmentCancel, adminDashboard } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js'
import { changeAvailability } from '../controllers/workerController.js'
import { get } from 'mongoose'

const adminRouter = express.Router()

adminRouter.post('/addWorker', authAdmin, upload.single('image'), addWorker)
adminRouter.post('/login', loginAdmin)
adminRouter.post('/allWorkers', authAdmin, allWorkers)
adminRouter.post('/change-availability', authAdmin, changeAvailability)
adminRouter.get('/appointments', authAdmin, appointmentsAdmin)
adminRouter.post('/cancel-appointment', authAdmin, appointmentCancel)
adminRouter.get('/dashboard', authAdmin, adminDashboard)


export default adminRouter