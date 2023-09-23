const User = require('../models/user-model')
const userCtrl = {}

userCtrl.register = async(req,res) =>{
    try{
        const {body} = req
        const user = new User(body)
        await user.save()
        res.json(user)
    }
    catch(e){
        res.status(400).json(e)
    }
}

module.exports = userCtrl