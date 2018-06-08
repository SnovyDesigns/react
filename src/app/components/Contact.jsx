import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';

const Contact = createReactClass({
    propTypes: {
        item: PropTypes.object.isRequired
    },
    render: function() {
        return (
            <div className="col-3 card">
                <img className="card-img-top mt-2" src="https://image.flaticon.com/icons/svg/265/265674.svg" height="150" width="50" alt="Contact icon"/>
                <div className="card-body">
                    <h5 className="card-title">Bio info:</h5>
                    <p className="contactLabel card-text"><b>Imię:</b> <span>{this.props.item.firstName}</span></p>
                    <p className="contactLabel card-text"><b>Nazwisko:</b> <span>{this.props.item.lastName}</span></p>
                    <a href={`mailto:${this.props.item.email}`}><b>Email:</b> <span>{this.props.item.email}</span></a>
                </div>  
            </div>
        );
    }
});

export default Contact;