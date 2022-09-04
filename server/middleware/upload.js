const path = require("path");
const multer = require("multer");

let uploadLocation = path.resolve(__dirname, "../uploads/");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadLocation);
  },
  filename: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    cb(null, file.originalname);
  },
});

let upload = multer({
  storage: storage,
  fileFilter: (req, file, callback) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      callback(null, true);
    } else {
      console.log("Please upload only jpg or png format files!");
      callback(null, false);
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 2,
  },
});

module.exports = upload;
