import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import MoviesList from './MoviesList';
import {fetchMovies} from './actions';

class MoviesPage extends React.Component{
    componentDidMount(){
        this.props.fetchMovies();
    }
    render(){
        return(
            <div>
                <h1>电影列表</h1>
                <MoviesList movies={this.props.movies} />
            </div>
        );
    }
}
//React组件属性部类（propTypes）校验
MoviesPage.propTypes = {
    movies:PropTypes.array.isRequired,
    fetchMovies:PropTypes.func.isRequired
}

//mapStateToProps是一个函数。它的作用就是像它的名字那样，建立一个从（外部的）state对象到（UI 组件的）props对象的映射关系。
//作为函数，mapStateToProps执行后应该返回一个对象，里面的每一个键值对就是一个映射。
function mapStateToProps(state){
    return{
        movies:state.movies
    }
}

export default connect(mapStateToProps,fetchMovies)(MoviesPage);