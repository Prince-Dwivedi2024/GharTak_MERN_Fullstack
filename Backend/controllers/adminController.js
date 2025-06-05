import validator from 'validator'
import bcrypt from 'bcrypt'
import {v2 as cloudinary} from 'cloudinary'
import workerModel from '../models/workerModel.js'

//API for adding worker
const addWorker = async (req, resp) => {
    try{
      
        const {name, email, password, speciality, degree, experience, about, fees, address} = req.body
        const imageFile = req.file
         
        console.log("req.body", req.body)
         console.log("req.file", req.file)

        //checking for all data to add worker
        if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address || !imageFile){
            return resp.json({success: false, message: "Missing Details"})
        }

        //validating email format
        if(!validator.isEmail(email)){
             return resp.json({success: false, message: "Please enter a valid email"})
        }

        //validating strong password
        if(password.length < 8){
            return resp.json({success: false, message: "Please enter a strong password"})
        }

        //salting and hashing worker password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type: "image"}) 
        const imageUrl = imageUpload.secure_url
        
        //store this data in our database
        const workerData = {
              name, 
              email,
              image:imageUrl,
              password:hashedPassword,
              speciality,
              degree,
              experience,
              about,
              fees,
              address:JSON.parse(address), //will store address as object in our database
              date: Date.now()
            }

            const newWorker = new workerModel(workerData)
            await newWorker.save()

            resp.json({success: true, message: "Worker added"})
        
    } catch(error){

        console.log(error)
        resp.json({success: false, message: error.message})

    }
}

//API For admin login
const loginAdmin = async(req, resp) => {
    try{
      
        const {email, password} = req.body
         
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){

        } else{
            resp.json({success: false message:})
        }

    } catch{
        onsole.log(error)
        resp.json({success: false, message: error.message})

    }
}

export {addWorker, loginAdmin}
