import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';

const ContactForm = createReactClass({
    propTypes: {
        contact: PropTypes.object.isRequired
    },
    render: function() {
        return (
            <form className="contactForm">
                <div className="row justify-content-center mb-3">
                    <div className="form-group col-4">
                        <input className="form-control" type="text" placeholder="Imię" value={this.props.contact.firstName}/>
                    </div>
                    <div className="form-group col-4">
                        <input className="form-control" type="text" placeholder="Nazwisko" value={this.props.contact.lastName}/>
                    </div>
                    <div className="form-group col-4">
                        <input className="form-control" type="email" placeholder="Email" value={this.props.contact.email}/>
                    </div>
                    
                </div>
                <div className="row justify-content-center">
                    <button className="btn btn-primary col-3" type="submit">Dodaj kontakt</button>
                </div>
            </form> 
        );
    }
});

export default ContactForm;