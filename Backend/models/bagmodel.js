import mongoose from "mongoose";

const bagSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true }
})

const bagModel = mongoose.models.bag || mongoose.model("bag", bagSchema)

export default bagModel;