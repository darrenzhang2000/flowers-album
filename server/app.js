const express = require("express")
const flowers = require('./webscrape')
const app = express()

const url = "https://www.proflowers.com/blog/types-of-flowers"

app.get('/', async (req, res, next)=>{
    res.send(flowers) 
})

app.listen(3000, ()=>{console.log('listening at port 3000')})