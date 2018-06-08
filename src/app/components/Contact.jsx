import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';

const Contact = createReactClass({
    propTypes: {
        item: PropTypes.object.isRequired
    },
    render: function() {
        return (
            <div>
                <img src="https://image.flaticon.com/icons/svg/265/265674.svg" height="50" width="50" alt="Contact icon"/>
                <p className="contactLabel">{`Imię: ${this.props.item.firstName}`}</p>
                <p className="contactLabel">{`Nazwisko: ${this.props.item.lastName}`}</p>
                <a href={`mailto:${this.props.item.email}`}>{this.props.item.email}</a>
            </div>
        );
    }
});

export default Contact;