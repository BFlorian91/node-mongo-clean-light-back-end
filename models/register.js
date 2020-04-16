import mongoose from 'mongoose'; 

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        index:true,
        unique: true
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true,
    },
    passwordResetToken: String,
    passwordResetExpires: Date
});


module.exports = mongoose.model('User', userSchema);