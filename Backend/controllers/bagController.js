
import bagModel from "../models/bagmodel.js";
import fs from "fs";
import bagRouter from "../routes/bagRoute.js";


//add bag item

const addBag = async (req, res) => {

    let image_filename = `${req.file.filename}`;



    const bag = new bagModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename


    })



    try {
        await bag.save();
        res.json({ success: true, message: "Bag Added" })
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })

    };

}

//all bag list

const listBag = async (req, res) => {
    try {
        const bag = await bagModel.find({});
        res.json({ success: true, data: bag });
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}


//remove bag item
const removeBag = async (req, res) => {
    try {
        const bag = await bagModel.findById(req.body.id);
        fs.unlink(`uploads/${bag.image}`, () => { })

        await bagModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "bag removed" });
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}


export { addBag, listBag, removeBag }