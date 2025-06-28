import express from 'express'
import { workerList, loginWorker, appointmentsWorker, appointmentComplete, appointmentCancel, workerDashboard, workerProfile, updateWorkerProfile } from '../controllers/workerController.js'
import authWorker from '../middlewares/authWorker.js'

const workerRouter = express.Router()

workerRouter.get('/list', workerList)
workerRouter.post('/login', loginWorker)
workerRouter.get('/appointments', authWorker, appointmentsWorker)
workerRouter.post('/complete-appointment', authWorker, appointmentComplete)
workerRouter.post('/cancel-appointment', authWorker, appointmentCancel)
workerRouter.get('/dashboard', authWorker, workerDashboard)
workerRouter.get('/profile', authWorker, workerProfile)
workerRouter.post('/update-profile', authWorker, updateWorkerProfile)


export default workerRouter