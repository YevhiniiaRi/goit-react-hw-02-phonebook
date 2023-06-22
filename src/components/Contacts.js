import React from 'react';
import './Contacts.css';

const Contacts = ({ contacts, onDeleteContact }) => (
  <ul className="Contact">
    {contacts.map(({ id, name, number }) => (
      <li key={id} className="Contacts__item">
        <p className="Contacts__text">
          {name}: {number}
        </p>
        <button onClick={() => onDeleteContact(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default Contacts;