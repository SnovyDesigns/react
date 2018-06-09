import React from 'react';
import createReactClass from 'create-react-class';

const Counter = createReactClass({
    getDefaultProps: function() {
        console.log('getDefaultProps');
    },
    getInitialState:function() {
        console.log('getInitialState');
        return {
            counter: 0
        };
    },
    componentWillMount: function() {
        console.log('componentWillMount');
    },
    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    decrement: function() {
        let updatedCounter = this.state.counter;
        updatedCounter === 0 ? 0 : updatedCounter--;
        this.setState({
            counter: updatedCounter
        });
    },
    render: function() {
        return (
            <div className="container" >
                <div className="row justify-content-center">
                    <div className="card col-4 text-center mt-4">
                        <h6 className="card-subtitle mb-2 text-muted mt-3">Stan licznika:</h6>
                        <h5 className="card-title">{this.state.counter}</h5>
                        <div className="row justify-content-around mt-3 mb-3">
                            <button className="btn btn-outline-success" onClick={this.increment}>Zwiększ licznik</button>
                            <button className="btn btn-outline-danger" onClick={this.decrement}>Zmniejsz licznik</button>
                        </div>
                    </div>
                </div>
            </div>
        );        
    },
    componentDidMount: function() {
        console.log('componentDidMount');
    },
    componentWillReceiveProps: function() {
        console.log('componentWillReceiveProps');
    },
    componentWillUpdate: function() {
        console.log('componentWillUpdate');
    },
    componentDidUpdate: function() {
        console.log('componentDidUpdate');
    },
    componentWillUnmount: function() {
        console.log('componentWillUnmount');
    }
});

export default Counter;