import validator from 'validator'
import bycrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js'

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

export {registerUser, loginUser} 