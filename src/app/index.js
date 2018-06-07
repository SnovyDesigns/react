import '../sass/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';


import movies from './database/movies';

const MovieImage = createReactClass({
    propTypes: {
        src: PropTypes.string.isRequired,
    },
    render: function() {
        return (
            <img className="mr-3" src={this.props.src} alt="Movie poster" />
        );
    }
});

const MovieTitle = createReactClass({
    propTypes: {
        number: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    },
    render: function() {
        return (
            <h2 className="mt-0"><small>{this.props.number}. </small>{this.props.title}</h2>
        );
    }
});

const MovieInfo = createReactClass({
    propTypes: {
        info: PropTypes.string.isRequired,
    },
    render: function() {
        return (
            <h6>{this.props.info}</h6>
        );
    }
});

const MovieDescription = createReactClass({
    propTypes: {
        desc: PropTypes.string.isRequired,
    },
    render: function() {
        return (
            <p>{this.props.desc}</p>
        );
    }
});

const Movie = createReactClass({
    propTypes: {
        data: PropTypes.object.isRequired,
    },
    render: function() {
        return (
            <div className="media">
                <MovieImage src={this.props.data.image} className='mr-3'/>
                <div className="media-body">
                    <MovieTitle title={this.props.data.title} number={this.props.data.id} />
                    <MovieInfo info={this.props.data.info} />
                    <MovieDescription desc={this.props.data.desc} />
                </div>
            </div>
        );
    }
});

const MoviesList = createReactClass({
    propTypes: {
        movies: PropTypes.array.isRequired,
    },
    render: function() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.movies.map(movie => (
                        <Movie data={movie} key={movie.id}/>
                    ))}
                </div>
            </div>
        );
    }
});

ReactDOM.render(<MoviesList movies={movies} />, document.getElementById('app'));
