import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';

const Contacts = createReactClass({
    propTypes: {
        item: PropTypes.array.isRequired
    },
    render: function() {
        let contacts = this.props.items.map((contact) => {
            <Contact item={contact} key={contact.id} />;
        });

        return (
            <ul className="contactsLists">
                {contacts}
            </ul> 
        );
    }
});

export default Contacts;