require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/server', (req, res) =>{
    res.send('<a href ="https://amnendratomar.netlify.app"> My website</a>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

