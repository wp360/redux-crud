import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

const MoviesList = ({movies,deleteMovie}) => {
    const emptyMessage = (
        <p>您的收藏夹里还没有相关电影</p>
    );
    const moviesList = (
        <div className="ui four cards">
            { movies.map(movie => <MovieCard movie={movie} key={movie._id} deleteMovie={deleteMovie} />) }
        </div>
    );
    return (
        <div>
            {movies.length === 0 ? emptyMessage : moviesList}
        </div>
    );
}

MoviesList.propTypes = {
    movies : PropTypes.array.isRequired
}

export default MoviesList;