const express = require('express')
const app = express()
const movies = require('./movies')

app.use(express.static('client'));

app.get('/movies', function(req,resp) {
    resp.json(movies)
})

app.get('/movies/:id', function(req, resp) {
    let id = req.params.id
    console.log("Getting an individual movie" + id)

    let movie = movies.find(f => f.id == id)
    resp.send(movie)
})



app.listen(8090)
console.log("Server at http://127.0.0.1:8090")

