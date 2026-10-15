function displayMovies(movieList){
      let movieGrid = document.getElementById("movie-grid")
    if(!movieGrid){
      return;
    }
  
    movieGrid.innerHTML = ""
  
    for(let movie of JSON.parse(movieList)){
      let movieString = `
        <div class="col">
          <div class="card shadow-sm" onclick="viewMovie(${movie.id})" style="cursor:pointer;">
            <img src="${movie.imageURL}">
                <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                    <p class="card-text">Genre: ${movie.genre}</p>
                    <p class="card-text">Release Year: ${movie.releaseYear}</p>
                </div>
          </div>
        </div>
      `
      movieGrid.innerHTML += movieString
    }
  }
  

function displayActors(actorList){
    let actorlist = document.getElementById("actor-list")
    if(!actorlist){
      return;
    }
  
    actorlist.innerHTML = ""
  
    for(let actor of JSON.parse(actorList)){
      let actorHTML = `
        <div onclick="selectActor(${actor.id})" style="cursor:pointer; margin-bottom:8px;">
          ${actor.name}
        </div>
      `
      actorlist.innerHTML += actorHTML
    }
  }

  window.addEventListener("DOMContentLoaded", async function(){
    try {
      hideMessage()
  
      let movieResponse = await fetch('http://127.0.0.1:8090/movies')
      let movieList = await movieResponse.text()
      displayMovies(movieList)
  
      let actorResponse = await fetch('http://127.0.0.1:8090/actors')
      let actorList = await actorResponse.text()
      displayActors(actorList)
    }
    catch(error){
      console.log(error)
      showMessage("Could not load data. Server may be unavailable.")
    }
  })


  const search_form = document.getElementById("search_form")

  if (search_form) {
    search_form.addEventListener("input", async function () {
      try {
        hideMessage()
  
        const search_box = document.getElementById('search_term')
        let search_term = search_box.value
  
        if(search_term === ""){
          let response = await fetch('http://127.0.0.1:8090/movies')
          let movieList = await response.text()
          displayMovies(movieList)
          return
        }
  
        let response = await fetch(`http://127.0.0.1:8090/movies/search?search_term=${search_term}`)
        let movieList = await response.text()
        displayMovies(movieList)
      }
      catch(error){
        console.log(error)
        showMessage("Could not search movies. Server may be unavailable.")
      }
    })
  
    search_form.addEventListener('submit', function (event) {
      event.preventDefault();
    })
  }




















  
const movie_form = document.getElementById('movie_form');

if (movie_form) {
  movie_form.addEventListener('submit', async function (event) {
    event.preventDefault();

    let new_movie = {
      title: document.getElementById('title').value,
      genre: document.getElementById('genre').value,
      releaseYear: document.getElementById('releaseYear').value,
      imageURL: document.getElementById('imageURL').value
    };

    let response = await fetch('http://127.0.0.1:8090/movies/new', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(new_movie)
    });

    let updatedResponse = await fetch('http://127.0.0.1:8090/movies')
    let updatedMovies = await updatedResponse.text()
    displayMovies(updatedMovies)
  });
}



  

  

async function selectActor(id){
    try {
      hideMessage()
  
      let response = await fetch(`http://127.0.0.1:8090/actors/${id}`)
      let actor = await response.text()
      actor = JSON.parse(actor)
  
      let actorMovies = actor.movieIds
  
      let movieResponse = await fetch('http://127.0.0.1:8090/movies')
      let movieList = await movieResponse.text()
      let movies = JSON.parse(movieList)
  
      let filtered = movies.filter(function(m) {
        return actorMovies.includes(parseInt(m.id))
      })
  
      displayMovies(JSON.stringify(filtered))
    }
    catch(error){
      console.log(error)
      showMessage("Could not load actor movies. Server may be unavailable.")
    }
  }

const actor_search = document.getElementById("actors_search")

  if(actor_search){
    actor_search.addEventListener("input", async function(){
      let search_term = actor_search.value
  
  
      let response = await fetch(`http://127.0.0.1:8090/actors/search?search_term=${search_term}`)
      let actorList = await response.text()
  
      displayActors(actorList)
    })
}


  async function viewMovie(id){
    try {
      hideMessage()
  
      let response = await fetch(`http://127.0.0.1:8090/movies/${id}`)
      let movie = await response.text()
      movie = JSON.parse(movie)
  
      let actorResponse = await fetch('http://127.0.0.1:8090/actors')
      let actorList = await actorResponse.text()
      let actors = JSON.parse(actorList)
  
      let movieActors = actors.filter(a => movie.actorIds.includes(a.id))
      let actorNames = movieActors.map(a => a.name).join(", ")
  
      let movieGrid = document.getElementById("movie-grid")
  
      movieGrid.innerHTML = `
        <div class="col-12">
          <div class="card p-3">
            <h3>${movie.title}</h3>
            <p><strong>Genre:</strong> ${movie.genre}</p>
            <p><strong>Year:</strong> ${movie.releaseYear}</p>
            <p><strong>Actors:</strong> ${actorNames}</p>
            <p><strong>Synopsis:</strong> ${movie.synopsis}</p>
          </div>
        </div>
      `
    }
    catch(error){
      console.log(error)
      showMessage("Could not load movie details. Server may be unavailable.")
    }
  }
















const genreFilter = document.getElementById("genre_filter")

if (genreFilter) {
  genreFilter.addEventListener("change", async function () {
    let selected = genreFilter.value

    let response = await fetch('http://127.0.0.1:8090/movies')
    let movieList = await response.text()
    let movies = JSON.parse(movieList)

    if (selected !== "all") {
      movies = movies.filter(function(movie) {
        return movie.genre.toLowerCase() === selected.toLowerCase()
      })
    }

    displayMovies(JSON.stringify(movies))
  })
}



function showMessage(message){
    let messageBox = document.getElementById("message_box")
    if(!messageBox){
      return
    }
  
    messageBox.textContent = message
    messageBox.classList.remove("d-none")
  }
  
  function hideMessage(){
    let messageBox = document.getElementById("message_box")
    if(!messageBox){
      return
    }
  
    messageBox.textContent = ""
    messageBox.classList.add("d-none")
  }