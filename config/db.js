const mongoose = require('mongoose')

const configureDb = async() =>{
    const url = process.env.DB_URL 
    const name = process.env.DB_NAME
    try{
        await mongoose.connect(`${url}/${name}`)
        console.log('connected to the database',name)
    }
    catch(e){
        console.log('error connecting to the database',e)
    }
}

module.exports = configureDb