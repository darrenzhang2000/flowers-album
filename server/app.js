const express = require("express")
const flowers = require('./webscrape')
const cors = require('cors')
const app = express()
app.use(cors())
app.get('/', async (req, res, next)=>{
    res.send(flowers) 
})

app.listen(3000, ()=>{console.log('listening at port 3000')})