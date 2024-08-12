import express from "express";
import { addBag, listBag, removeBag } from "../controllers/bagController.js";
import multer from "multer";

const bagRouter = express.Router();

//image storage engine

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

bagRouter.post("/add", upload.single("image"), addBag)



bagRouter.post("/add", upload.single("image"), addBag)
bagRouter.get("/list",listBag)
bagRouter.post("/remove",removeBag)



export default bagRouter;