import jwt  from "jsonwebtoken"


const authMiddlewear=async(req,res,next)=>{
    // console.log(req);
    
    const {token}=req.headers;
    // console.log("token", token);
    
    if(!token){
        return res.json({success:false,message:"Not authorized login again"})
    }
    try {
         const token_decoded=jwt.verify(token,process.env.JWT_SECRET)
         req.body.userId=token_decoded.id;
         next();
    } catch (error) {
        console.log(error);
        return res.json({success:false,message:"Error"})
    }
}

export default authMiddlewear;