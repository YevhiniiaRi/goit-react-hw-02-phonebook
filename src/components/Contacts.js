import React from 'react';
import './Contacts.css';

const Contacts = ({ contacts, onDeleteContact }) => (
  <ul className="Contact">
    {contacts.map(({ id, text }) => (
      <li key={id} className="Contacts__item">
        <p className="Contacts__text">{text}</p>
        <button onClick={() => onDeleteContact(id)}>Видалити</button>
      </li>
    ))}
  </ul>
);

export default Contacts;