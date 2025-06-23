import validator from 'validator'
import bycrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js'
import {v2 as cloudinary} from 'cloudinary'
import workerModel from '../models/workerModel.js'
import appointmentModel from '../models/appointmentModel.js'
import razorpay from 'razorpay'

//API to register user
const registerUser = async (req, resp) => {

    try {
        
        const {name, email, password} = req.body

        if(!name || !password || !email){
            return resp.json({success:false, message:"Missing details"})
        }

        //validate email format 
        if(!validator.isEmail(email)){
            return resp.json({success:false, message:"enter a valid email"})
        }

        //validate strong password
        if(password.length < 8){
            return resp.json({success:false, message:"enter a valid password"})
        }

        //hasing user password
        const salt = await bycrypt.genSalt(10)
        const hashedPassword = await bycrypt.hash(password, salt)

        //now save these data in the database
        const userData = {
            name,
            email,
            password : hashedPassword
        }

        const newUser = new userModel(userData)
        const user = await newUser.save()

        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)

        resp.json({success: true, token})

    } catch (error) {
        console.log(error)
        resp.json({success: false, message : error.message})
    }
}

//API for user login
const loginUser = async (req, resp) => {
    try {
        
      const {email, password} = req.body
      const user = await userModel.findOne({email}) //fetch this email

      if(!user){
        return resp.json({success:false, message:"User does not exist"})
      }
      //if user exist, match the password
      const isMatch = await bycrypt.compare(password, user.password)

      if(isMatch){
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)
        resp.json({success:true, token})
      } else{
        resp.json({success:false, message:"Invalid credentials"})
      }

    } catch (error) {
        console.log(error)
        resp.json({success: false, message : error.message})
    }
}

//API to get user profile data
const getProfile = async (req, resp) => {

    try {

        const {userId} = req
        const userData = await userModel.findById(userId).select('-password')
        resp.json({success: true, userData})
  
    } catch (error) {
        console.log(error)
        resp.json({success: false, message : error.message})
    }

}

//API to update user profile
const updateProfile = async (req, resp) => {

    try {

        const { name, phone, address, dob, gender } = req.body;
        const userId = req.userId; //get it from middleware-authUser

        const imageFile = req.file

        if(!name || !phone || !dob || !gender) {
            return resp.json({success: false, message: "Data Missing"})
        }

        await userModel.findByIdAndUpdate(userId,{name, phone, address: JSON.parse(address), dob, gender})

        if(imageFile){
            //upload image to cloudinary
            const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type: 'image'}) 
            const imageURL = imageUpload.secure_url
            //save image url in user data
            await userModel.findByIdAndUpdate(userId, {image: imageURL})
        }

        resp.json({success: true, message:"Profile Updated"})

    } catch (error) {
        console.log(error)
        resp.json({success: false, message : error.message})
    }

}

//API to book appointment
const bookAppointment = async (req, resp) => {

    try {

        const userId = req.userId; //coming from our authUser middleware
        const { workId, slotDate, slotTime } = req.body;

        const workData = await workerModel.findById(workId).select('-password')

        if(!workData.available){
            return resp.json({success: false, message: 'Worker is not available'})
        }
        //if doctor available
        let slots_booked = workData.slots_booked
        //checking for slot availability
        if(slots_booked[slotDate]){
            if(slots_booked[slotDate].includes(slotTime)){
                 return resp.json({success: false, message: 'Slot not available'})
            } else{ //book that slot
                slots_booked[slotDate].push(slotTime)
            }
        } else {
               slots_booked[slotDate] = []
               slots_booked[slotDate].push(slotTime)
        }

        const userData = await userModel.findById(userId).select('-password')

        delete workData.slots_booked  //we fethed whatever we need from workData, now we do not need it

        const appointmentData = {
            userId,
            workId,
            userData,
            workData,
            amount: workData.fees,
            slotTime,
            slotDate,
            date: Date.now()
        }

        const newAppointment = new appointmentModel(appointmentData)
        await newAppointment.save()

        //save new slots data in workData
        await workerModel.findByIdAndUpdate(workId, {slots_booked})

        resp.json({success: true, message: 'Appointment Booked'})
        
    } catch (error) {
        console.log(error)
        resp.json({success: false, message: error.message})
    }
}

//API to get user Appointments for frontend my-appointments page
const listAppointment = async (req, resp) => {

    try {

        const userId = req.userId
        const appointments = await appointmentModel.find({userId})

        resp.json({success: true, appointments})
        
    } catch (error) {
        console.log(error)
        resp.json({success: false, message: error.message})
    }
}

//API to cancel appointment
const cancelAppointment = async (req, resp) => {

    try {

        const userId = req.userId
        const {appointmentId} = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)

        //verify appointment user
        if(appointmentData.userId !== userId){
            return resp.json({success: false, message:'Unathorized action'})
        }

        await appointmentModel.findByIdAndUpdate(appointmentId, {cancelled:true})

        //removing this doctor slot
        const {workId, slotDate, slotTime} = appointmentData

        const workerData = await workerModel.findById(workId)
        let slots_booked = workerData.slots_booked
        slots_booked[slotDate] = slots_booked[slotDate].filter(e => e !== slotTime)

        await workerModel.findByIdAndUpdate(workId, {slots_booked})

        resp.json({success:true, message:'Appointment Cancelled'})
        
    } catch (error) {
        console.log(error)
        resp.json({success: false, message: error.message})
    }
}

//API to make payment of appointment using razorpay
const paymentRazorpay = async (req, resp) => {
    
}

export {registerUser, loginUser, getProfile, updateProfile, bookAppointment, listAppointment, cancelAppointment} 