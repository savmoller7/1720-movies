
 // grab the movies data from the file
import { movies } from "../data/movies.mjs";
console.log(movies);

// reference to the ids on our web page
const displayMovies = document.querySelector("#showMovies");
const popupBox = document.querySelector("#popupBox");
const popupInfo = document.querySelector("#popupInfo");
const closeButton = document.querySelector("#closeButton");

// path to movie posters
const imagePath = "images/";


// ---------------- DISPLAY MOVIES ----------------

// display all movies
function showMovies() {
    // clear the previous movies
    displayMovies.innerHTML = "";

    movies.forEach((movie) => {

        // create a heading two for the movie title
        let movieTitle = document.createElement("h2");
        movieTitle.innerText = movie.title;

        // create an image for the movie poster
        let movieImage = document.createElement("img");
        movieImage.src = imagePath + movie.image;
        movieImage.alt = movie.title;
        movieImage.loading = "lazy";
        movieImage.width = 250;
        movieImage.height = 375;

        // create a button for the movie details
        let movieButton = document.createElement("button");
        movieButton.innerText = "Movie Details";

        // create a section for each card
        let movieCard = document.createElement("section");
        movieCard.className = "movie-card";

        // build the section with child elements
        movieCard.appendChild(movieTitle);
        movieCard.appendChild(movieImage);
        movieCard.appendChild(movieButton);

        // add an event listener to the movie button
        movieCard.querySelector("button").addEventListener("click", () => {
            showMovieDetails(movie);
        });

        // add the new card to the page
        displayMovies.appendChild(movieCard);
    });
}


// ---------------- MOVIE DETAILS MODAL ----------------

// display the details for the selected movie
function showMovieDetails(movie) {
    popupInfo.innerHTML = `
        <h2>${movie.title}</h2>
        <p><span>Release Date:</span> ${movie.release}</p>
        <p><span>Rating:</span> ${movie.rating}</p>
        <p><span>Director:</span> ${movie.director}</p>
        <p><span>Studio:</span> ${movie.studio}</p>
        <p><span>Summary:</span> ${movie.summary}</p>
    `;

    // open the modal
    popupBox.showModal();
}

// close the modal when the close button is clicked
closeButton.addEventListener("click", () => {
    popupBox.close();
});


// populate page by default
showMovies();
