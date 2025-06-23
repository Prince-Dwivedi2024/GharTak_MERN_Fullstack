import multer from "multer";

const storage = multer.diskStorage({
  // destination: function (req, file, cb) {
  //     cb(null, 'uploads/'); // store files in /uploads folder
  //   },
  filename: function(req, file, callback){
    callback(null, file.originalname)
  }
})

const upload = multer({storage})

export default upload