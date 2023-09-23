require('dotenv').config()
const express = require('express')
const cors = require('cors')
const userCtrl = require('./app/controllers/user-controller')
const app = express()

const port = process.env.PORT || 3940

const configureDb = require('./config/db.js')
const routes = require('./config/routes.js')
configureDb()

app.use(express.json())
app.use(cors())
app.post('/api/user/register',userCtrl.register)
app.use('/',routes)

app.listen(port,()=>{
    console.log('server running on port',port)
})