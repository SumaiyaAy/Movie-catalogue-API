const express = require('express')
const app = express()
const movies = require('./movies')
const actors = require('./actors')

app.use(express.static('client'));
app.use(express.json())

app.get('/movies', function(req,resp) {
    resp.json(movies)
})

app.get('/actors', function(res, resp) {
    resp.send(actors)
})

app.get('/movies/search', function(req,resp){
    let search_term = req.query.search_term
    if(!search_term){
      resp.status(400).send('no search term specified')
      return
    }
    let results = movies.filter(item => item.title.toLowerCase().includes(search_term.toLowerCase()))
    resp.send(results)
  })

app.post("/movies/new", function(req, resp){
    let new_movie = req.body;
    new_movie.id = movies.length + 1;
    movies.push(new_movie);
    resp.send(movies);
  });

app.get('/movies/:id', function(req, resp) {
    let id = req.params.id

    let movie = movies.find(f => f.id == id)
    resp.send(movie)
})

app.get('/actors', function (req, resp) {
    resp.json(actors)
})

app.get('/actors/search', function(req, resp){
  
    let search_term = req.query.search_term
  
    if(!search_term || search_term.trim() === ""){
      resp.send(actors)
      return
    }
  
    let results = actors.filter(a =>
      a.name.toLowerCase().includes(search_term.toLowerCase())
    )
  
    resp.send(results)
})

app.get('/actors/:id', function(req, resp) {
    let id = req.params.id

    let actor = actors.find(f => f.id ==id)
    resp.send(actor)
})

if (require.main === module) {
    app.listen(8090, function () {
      console.log("Server at http://127.0.0.1:8090");
    });
  }
  
  module.exports = app;