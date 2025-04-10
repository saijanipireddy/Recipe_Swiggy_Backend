import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'

export const registerUser = async (req,res) => {
    try {
        const {fullname, email,password,confirmpassword} = req.body;
        const exist = await userModel.findOne({email})
        if(exist) {
            return res.status(400).send('user Already Exists')
        }
        if (password !== confirmpassword) {
            return res.status(400).send('Password Mismatches')
        }
        let newUser = new userModel ({
            fullname,
            email,
            password,
            confirmpassword
        })
        newUser.save();
        return res.status(200).send('User Registered SuccesfullY!')
    }
    catch(err) {
        console.log(err)
        return res.status(500).send('server Error')
    }

}

export const loginUser = async (req,res) => {
    try {
        const {email, password} = req.body;

        const exist = await userModel.findOne({email});

        if(!exist) {
            return res.status(400).send('User Not Exist')
        }
        if (exist.password !== password) {
            return res.status(400).send("Invalid Credentials")
        }
        let payload = {
            user:{
                id: exist.id
            }
        }
    
        jwt.sign(payload, 'jwtsecret', {expiresIn : 3000},
            (err,token) => {
                if (err) throw err 
                return res.json({token})
            }
        )
    }
    catch(err) {
        console.log(err)
        return res.status(500).send('server Error')
    }
}

export const getProfiles = async (req,res) => {
    try {
        const userProfiles = await userModel.find()
        res.json({success:true, data:userProfiles})
    }
    catch(err) {
        console.log(err)
        res.status(500).send('server Error')
    }
}