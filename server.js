const express = require('express')
const app = express()
const movies = require('./movies')

app.use(express.static('client'));

app.get('/movies', function(req,resp) {
    resp.json(movies)
})


app.listen(8090)
console.log("Server at http://127.0.0.1:8090")

