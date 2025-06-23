import workerModel from "../models/workerModel.js"


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

export {changeAvailability, workerList}