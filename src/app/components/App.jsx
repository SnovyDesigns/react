import '../../sass/App.scss';

import React from 'react';
import createReactClass from 'create-react-class';

import Search from './Search.jsx';
import Gif from './Gif.jsx';

const GIPHY_API_URL = 'https://api.giphy.com';
const GIPHY_PUB_KEY = 'Pdp1hN2pop8rKyGkMTV242QC9AcJnnfa';


const App = createReactClass({
    getInitialState() {
        return {
            loading: false,
            searchingText: '',
            gif: {}
        };
    },
    render: function() {
        return (
            <div className="app">
                <h1>Wyszukiwarka GIFow!</h1>
                <p>Znajdź gifa na <a href='http://giphy.com'>giphy</a>. Naciskaj Enter, aby pobrać kolejne gify.</p>
                <Search onSearch={this.handleSearch}/>
                <Gif
                    loading={this.state.loading}
                    url={this.state.gif.url}
                    sourceUrl={this.state.gif.sourceUrl}
                />
            </div>
        );
    },
    handleSearch: function(searchingText) { 
        this.setState({
            loading: true  
        });
        this.getGif(searchingText, function(gif) {  
            this.setState({  
                loading: false,  
                gif: gif,  
                searchingText: searchingText  
            });
        }.bind(this));
    },
    getGif: function(searchingText, callback) { 
        let url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText;  
        let xhr = new XMLHttpRequest();  
        xhr.open('GET', url);
        xhr.onload = function() {
            if (xhr.status === 200) {
                let data = JSON.parse(xhr.responseText).data; 
                let gif = {  
                    url: data.fixed_width_downsampled_url,
                    sourceUrl: data.url
                };
                callback(gif);  
            }
        };
        xhr.send();
    }
});

export default App;