import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import Contact from './Contact.jsx';

const Contacts = createReactClass({
    propTypes: {
        items: PropTypes.array.isRequired
    },
    render: function() {
        let contacts = this.props.items.map((contact) => {
            return <Contact item={contact} key={contact.id} />;
        });

        return (
            <ul className="contactsLists">
                {contacts}
            </ul> 
        );
    }
});

export default Contacts;