import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

export default function MovieCard({movie}) {
    return (
        <div className="ui card">
            <div className="image">
                <img src={movie.cover} alt={movie.title} />
            </div>
            <div className="content">
                <div className="header">{movie.title}</div>
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <Link to={`/movie/${movie._id}`} className="ui basic button green">编辑</Link>
                    <div className="ui basic button red">删除</div>
                </div>
            </div>
        </div>
    );
}

MovieCard.propTypes = {
    movie : PropTypes.object.isRequired
}