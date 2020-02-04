import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';
import Spinner from '../layout/Spinner';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? // if filtered is Not null, map what is in it through contacts
              filtered.map((
                contact //  for each filtered contact load/show filtered contact
              ) => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames='item'
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))
            : //else filtered Is null, show contacts
              contacts.map(contact => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames='item'
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Contacts;

// Default:

// <Fragment>
//   {filtered !== null // if filtered is Not null, map what is in it through contacts
//   ? //if
//     filtered.map(contact => (
//       <ContactItem key={contact.id} contact={contact} /> //  for each filtered contact load/show filtered contact
//     ))
//   : //else
//     contacts.map(contact => (
//       <ContactItem key={contact.id} contact={contact} /> // if filtered Is null, show contacts
//     ))}
// </Fragment>
