const mongoose = require('mongoose')
const {Schema,model} = mongoose

const userSchema = new Schema({
    fName: String,
    lName: String,
    city: String,
    email: String,
    country: String,
    phoneNo: Number,
    profession: String,
    socialMedia: String
})

const User = model('User',userSchema)
module.exports = User