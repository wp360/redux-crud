import React from 'react';
import PropTypes from 'prop-types';

export default function MoviesList({movies}) {
    const emptyMessage = (
        <p>您的收藏夹里还没有相关电影</p>
    );
    const moviesList = (
        <p>电影列表</p>
    );
    return (
        <div>
            {movies.length === 0 ? emptyMessage : moviesList}
        </div>
    );
}

MoviesList.propTypes = {
    movies:PropTypes.array.isRequired
}