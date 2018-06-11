import '../../sass/App.scss';

import React from 'react';
import createReactClass from 'create-react-class';

import Search from './Search.jsx';
import Gif from './Gif.jsx';


const App = createReactClass({
    render: function() {
        return (
            <div className="app">
                <h1>Wyszukiwarka GIFow!</h1>
                <p>Znajdź gifa na <a href='http://giphy.com'>giphy</a>. Naciskaj Enter, aby pobrać kolejne gify.</p>
                <Search />
                <Gif />
            </div>
        );
    }
});

export default App;