import React from 'react';
import styles from './Contacts.module.css';

const Contacts = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={styles.contactRender}>
        <p className={styles.Contacts__text}>
          {name}: {number}
        </p>
        <button onClick={() => onDeleteContact(id)} className={styles.buttonDel}>Delete</button>
      </li>
    ))}
  </ul>
);

export default Contacts;

