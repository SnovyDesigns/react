import '../sass/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import movies from './database/movies';

const moviesElements = movies.map(movie => (
    <div className="media" key={movie.id}>
        <img className="mr-3" src={movie.image} alt="Movie poster" />
        <div className="media-body">
            <h3 className="mt-0"><small>{movie.id}. </small>{movie.title}</h3>
            <h6>{movie.info}</h6>
            <p>{movie.desc}</p>
        </div>
    </div>
));

const element = (
    <div className="container">
        <div className="row">
            {moviesElements}
        </div>
    </div>
);

ReactDOM.render(element, document.getElementById('app'));