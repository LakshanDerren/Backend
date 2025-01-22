import { hashpass } from "../lib/bcrypt.js"
import { userZod } from "../lib/ZOD.js"
import USER from "../modules/user.model.js"

export const signup = async (req,res)=>{
    try {
        const checkedUser = userZod.parse(req.body)
        const {username,email,password} = checkedUser
        const hashPassword =await hashpass(password)
        
        const newUser = await USER.create({
            username,
            email,
            password:hashPassword
        })
        res.status(200).json({
            user:newUser
        })
    } catch (error) {
        res.status(401).json({
            message:"signup failed",
            err:error.message
        })
    }
}