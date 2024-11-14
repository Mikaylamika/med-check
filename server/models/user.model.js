import mongoose from 'mongoose'
import crypto from 'crypto'

/** User Schema */
const User = new mongoose.Schema({
    user: {type: String},
    email: {type: String,required: true,},
    password: {type: String,required: true},  
    premium: {type: Boolean,default:false},
    verified: {type: Boolean,default: false},
    emailToken: {type: String, default: crypto.randomBytes(64).toString("hex")},
    },
    { collection: 'user-data' }
)

export default mongoose.model('UserData', User)
