import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import bagRouter from "./routes/bagRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"


//config
const app = express()
const port = 4000

//middlewear
app.use(express.json())
app.use(cors())

//db connectin
connectDB();


//api endpoints
app.use("/api/bag", bagRouter)
app.use("/images", express.static('uploads'));
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter)

app.get("/", (req, res) => {
    res.send("API WORKING")
})

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);

})