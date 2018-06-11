import '../../sass/Search.scss';

import React from 'react';
import createReactClass from 'create-react-class';


const Search = createReactClass({
    getInitialState: function() {
        return {
            searchingText: ''
        };
    },
    render: function() {
        return (
            <input type="text" className="search" placeholder="Tutaj wpisz wyszukiwaną frazę" value={this.getInitialState.searchingText} onChange={this.handleChange}/>
        );
    },
    handleChange: function(event) {
        let searchingText = event.targe.value;
        this.setState({
            searchingText: searchingText
        });
    }
});

export default Search;