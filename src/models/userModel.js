import mongoose from 'mongoose'

let RegisterUser = new mongoose.Schema({
    fullname: {
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    }
})

const userModel = mongoose.models.userDetails || mongoose.model('userDetails', RegisterUser)

export default userModel