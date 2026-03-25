// Takes movie data, turns it into HTML, puts it on page 
function displayMovies(movieList){
    console.log(movieList)
  
    let movieGrid = document.getElementById("movie-grid")
    if(!movieGrid){
      return;
    }
  
    movieGrid.innerHTML = ""
  
    for(let movie of JSON.parse(movieList)){
      let movieString = `
        <div class="col">
          <div class="card shadow-sm">
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
  
  window.addEventListener("DOMContentLoaded", async function(event){
    let movieResponse = await fetch('http://127.0.0.1:8090/movies')
    let movieList = await movieResponse.text()
    displayMovies(movieList)
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

  
  

