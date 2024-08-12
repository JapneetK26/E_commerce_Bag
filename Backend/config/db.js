import mongoose from "mongoose"

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://japneetkaur:japneet@cluster0.nzkii.mongodb.net/TrainingProj').then(()=>console.log("DB Connected"));
}


