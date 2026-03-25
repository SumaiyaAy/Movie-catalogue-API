// Takes movie data, turns it into HTML, puts it on page 
function displayMovies(movieList){
    console.log(movieList)
  
    let movieGrid = document.getElementById("movie-grid")
    if(!movieGrid){
      return;
    }
  
    movieGrid.innerHTML = ""
  
    for(let movie of JSON.parse(movieList)){
    console.log(movie.title, movie.imageURL)
      let movieString = `
        <div class="col">
          <div class="card shadow-sm">
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

window.addEventListener("DOMContentLoaded", async function(event){
    let movieResponse = await fetch('http://127.0.0.1:8090/movies')
    let movieList = await movieResponse.text()
    displayMovies(movieList)

    let actorResponse = await fetch('http://127.0.0.1:8090/actors')
    let actorList = await actorResponse.text()
    displayActors(actorList)
  })






  const search_form = document.getElementById("search_form")


  if (search_form) {
    search_form.addEventListener("input", async function (event) {
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
    let response = await fetch(`http://127.0.0.1:8090/actors/${id}`)
    let actor = await response.text()
    actor = JSON.parse(actor)
  

  
    let actorMovies = actor.movieIds
  
    let movieResponse = await fetch('http://127.0.0.1:8090/movies')
    let movieList = await movieResponse.text()
    let movies = JSON.parse(movieList)
  
  
    let filtered = movies.filter(function(m) {
      return actorMovies.includes(m.id)
    })
  

  
    displayMovies(JSON.stringify(filtered))
  }