const express = require('express')
const app = express()
const movies = require('./movies')
const actors = require('./actors')

app.use(express.static('client'));

app.get('/movies', function(req,resp) {
    resp.json(movies)
})





app.get('/movies/search', function(req,resp){
    console.log("searching for movies")
    let search_term = req.query.search_term
    if(!search_term){
      resp.status(400).send('no search term specified')
      return
    }
    let results = movies.filter(item => item.title.toLowerCase().includes(search_term.toLowerCase()))
    resp.send(results)
  })









app.get('/movies/:id', function(req, resp) {
    let id = req.params.id
    console.log("Getting an individual movie " + id)

    let movie = movies.find(f => f.id == id)
    resp.send(movie)
})


app.get('/actors', function (req, resp) {
    resp.json(actors)
})

app.get('/actors/:id', function(req, resp) {
    let id = req.params.id
    console.log("Getting an individual actor " + id)

    let actor = actors.find(f => f.id ==id)
    resp.send(actor)
})




app.listen(8090)
console.log("Server at http://127.0.0.1:8090")

