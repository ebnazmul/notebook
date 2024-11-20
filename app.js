require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

// global middlewires
app.use(cors())
app.use(express.json())


// routes 
const routes = express.Router()
routes.route('/').get()

app.use('/notes', routes)



app.get('/', (req, res)=>{{
    res.send("Working...")
}})



module.exports = app;