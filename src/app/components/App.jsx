import React from 'react';
import createReactClass from 'create-react-class';

import contactForm from '../data/contactForm';
import contacts from '../data/contacts';
import ContactForm from '../components/ContactForm.jsx';
import Contacts from '../components/Contacts.jsx';

const App = createReactClass({
    render: function() {
        return (
            <div className="app">
                <ContactForm contact={contactForm} />
                <Contacts items={contacts} />
            </div>
        );
    }
});

export default App;