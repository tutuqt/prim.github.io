document.addEventListener('DOMContentLoaded', function() {
    const url = 'https://api.jsonbin.io/v3/b/6641a122e41b4d34e4f2f3af';

    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const movies = data.record; 
        const movieContainer = document.querySelector('.movie-container');
        if (movieContainer) { 
            movies.forEach(movie => {
                const card = document.createElement('div');
                card.classList.add('movie-card');

                card.innerHTML = `
                    <img src="${movie.image}" alt="${movie.title}" class="movie-image">
                    <div class="movie-info">
                        <h3 class="movie-title">${movie.title}</h3>
                        <p class="movie-times">${movie.times.join(', ')}</p>
                        <p>${movie.description}</p>
                    </div>
                `;

                movieContainer.appendChild(card);
            });
        }
    })
    .catch(error => {
        console.error('Error loading the movies:', error);
        alert('Failed to load movies. Please check the console for more information.');
    });

    fetchUpcomingMovies();
});

function fetchUpcomingMovies() {
    const url = 'https://api.jsonbin.io/v3/b/664a2df0acd3cb34a84a6a5f'; // Replace with the path to your JSON file

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const upcomingContainer = document.querySelector('.upcoming-movie-container');
            data.record.forEach(movie => {
                const movieDiv = document.createElement('div');
                movieDiv.classList.add('movie');

                const moviePoster = document.createElement('img');
                moviePoster.src = movie.poster;
                moviePoster.alt = movie.title;

                const movieTitle = document.createElement('h3');
                movieTitle.textContent = movie.title;

                const movieReleaseDate = document.createElement('p');
                movieReleaseDate.textContent = `Release Date: ${movie.release_date}`;

                const movieDescription = document.createElement('p');
                movieDescription.textContent = movie.description;

                movieDiv.appendChild(moviePoster);
                movieDiv.appendChild(movieTitle);
                movieDiv.appendChild(movieReleaseDate);
                movieDiv.appendChild(movieDescription);

                upcomingContainer.appendChild(movieDiv);
            });
        })
        .catch(error => console.error('Error fetching the upcoming movies:', error));
}
