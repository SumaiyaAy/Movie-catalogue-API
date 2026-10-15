Movie Catalogue API Docmentation

GET /movies:
Returns a list of all movies
Response - JSON array of movie objects
Example:
[
  {
    "id": 1,
    "title": "Inception",
    "genre": "Sci-Fi",
    "releaseYear": 2010
  }
]


GET /movies/:id
Returns a single movie by id
Response - JSON object of the movie


GET /movies/search?search_term=
searches for movies by title
Response - JSON array of matching movies
If search_term is missing, 400 status is returned


POST /movies/new
Adds a new movie
Response - Updates list of movies


GET /actors
Returns a list of all actors
Response - JSON array of actors


GET /actors/:id
Returns a single actor by ID
Response - JSON object of the actor

GET /actors/search?search_term=
searches for actors by name
Response - JSON array of matching actors
If search_term is missing, 400 status is returned