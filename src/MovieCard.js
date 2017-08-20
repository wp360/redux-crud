import React from 'react';
import PropTypes from 'prop-types';

export default function MovieCard({movie}) {
    return (
        <div className="ui card">
            <div className="image">
                <img src={movie.cover} alt={movie.title} />
            </div>
            <div className="content">
                <div className="header">
                    {movie.title}
                </div>
            </div>
        </div>
    );
}

MovieCard.propTypes = {
    movie : PropTypes.object.isRequired
}