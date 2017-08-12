export function fetchMovies() {
    return dispatch => {
        fetch('/api/movies');
    };
}