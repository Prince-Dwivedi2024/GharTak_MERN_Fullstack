import workerModel from "../models/workerModel.js"
import bycrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import appointmentModel from "../models/appointmentModel.js"


const changeAvailability = async (req, resp) => {
    try {
         const {workId} = req.body

         const workData = await workerModel.findById(workId)
         await workerModel.findByIdAndUpdate(workId, {available:!workData.available})
         resp.json({success: true, message: 'Availability Changed'})

    } catch (error) {
        console.log(error)
        resp.json({success: false, message : error.message})
    }
}

const workerList = async (req, resp) => {
    try {
        
        const workers = await workerModel.find({}).select(['-password', '-email'])
        resp.json({success:true, workers})

    } catch (error) {
        console.log(error)
        resp.json({success: false, message : error.message})
    }
}

//API for worker login
const loginWorker = async (req, resp) => {

    try {

        const {email, password} = req.body
        const worker = await workerModel.findOne({email})

        if(!worker){
           return resp.json({success: false, message: 'Invalid credentials'})
        }

        const isMatch = await bycrypt.compare(password, worker.password)

        if(isMatch){
            const token = jwt.sign({id:worker._id}, process.env.JWT_SECRET)
            resp.json({success: true, token})
        } else {
            resp.json({success: false, message: 'Invalid credentials'})
        }
        
    } catch (error) {
        console.log(error)
        resp.json({success: false, message : error.message})
    }

}

//API to get worker's appointments for worker panel
const appointmentsWorker = async (req, resp) => {

    try {

        const {workId} = req
        const appointments = await appointmentModel.find({workId})

        resp.json({success: true, appointments})
        
    } catch (error) {
         console.log(error)
        resp.json({success: false, message : error.message})
    }

}

//API to mark appointment completed for worker panel
const appointmentComplete = async (req, resp) => {

   try {

    const {workId} = req
    const {appointmentId} = req.body

    const appointmentData = await appointmentModel.findById(appointmentId)

    if(appointmentData && appointmentData.workId == workId){
        await appointmentModel.findByIdAndUpdate(appointmentId, {isCompleted: true})
        return resp.json({success:true, message:'Appointment Completed'})
    } else {
        return resp.json({success: false, message: 'Mark Failed'})
    }
    
   } catch (error) {
    console.log(error)
        resp.json({success: false, message : error.message})
   }

}

//API to mark appointment cancelled for worker panel
const appointmentCancel = async (req, resp) => {

   try {

    const {workId} = req
    const {appointmentId} = req.body

    const appointmentData = await appointmentModel.findById(appointmentId)

    if(appointmentData && appointmentData.workId == workId){
        await appointmentModel.findByIdAndUpdate(appointmentId, {cancelled: true})
        return resp.json({success:true, message:'Appointment Cancelled'})
    } else {
        return resp.json({success: false, message: 'Cancellation Failed'})
    }
    
   } catch (error) {
    console.log(error)
        resp.json({success: false, message : error.message})
   }

}

//API to get dashboard data for worker panel
const workerDashboard = async (req, resp)=> {

    try {

        const {workId} = req

        const appointments = await appointmentModel.find({workId})

        let earnings = 0;
        appointments.map((item)=> {
            if (item.isCompleted || item.payment) {
                earnings += item.amount
            }
        })

        //no of unique patients
        let users = []
         appointments.map((item)=> {
            if(!users.includes(item.userId)){
                users.push(item.userId)
            }
         })

         const dashData = {
            earnings,
            appointments: appointments.length,
            users: users.length,
            latestAppointments: appointments.reverse().slice(0,5)
         }
         resp.json({success: true, dashData})
        
    } catch (error) {
        console.log(error)
        resp.json({success: false, message : error.message})
    }

}

//API to get worker profile for worker panel
const workerProfile = async (req, resp) => {

   try {

    const {workId} = req
    const profileData = await workerModel.findById(workId).select('-password')

    resp.json({success: true, profileData})
    
   } catch (error) {
         console.log(error)
         resp.json({success: false, message : error.message})
   }

}

//API to update worker profile data from worker panel
const updateWorkerProfile = async (req, resp) => {

    try {
        
        const {workId} = req
        const {fees, address, available} = req.body

        await workerModel.findByIdAndUpdate(workId, {fees, address, available})

        resp.json({success: true, message: 'Profile Updated'})
        
    } catch (error) {
         console.log(error)
         resp.json({success: false, message : error.message})
    }

}


export {changeAvailability,
        workerList, 
        loginWorker,
        appointmentsWorker,
        appointmentComplete, 
        appointmentCancel, 
        workerDashboard,
        workerProfile,
        updateWorkerProfile
    }