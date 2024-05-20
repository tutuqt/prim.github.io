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
        movies.forEach(movie => {
            const card = document.createElement('div');
            card.classList.add('movie-card');

            card.innerHTML = `
                <img src="${movie.image}" alt="${movie.title}" class="movie-image">
                <div class="movie-info">
                    <h3 class="movie-title">${movie.title}</h3>
                    <p class="movie-times">${movie.times.join(', ')}</p>
                    <p>${movie.description}</p>
                    <a href="order.html" class="book-button">Тасалбар захиалах</a>
                </div>
            `;

            movieContainer.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error loading the movies:', error);
        alert('Failed to load movies. Please check the console for more information.');
    });
});
