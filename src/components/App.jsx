import React, { Component } from 'react';
import Contacts from './Contacts';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleAddContact = event => {
    event.preventDefault();
    const { name, contacts } = this.state;
    if (name.trim() === '') {
      return;
    }
    const newContact = {
      id: nanoid(),
      text: name,
      completed: false,
    };
    this.setState({
      contacts: [...contacts, newContact],
      name: '',
    });
  };

  render() {
    const { contacts, name } = this.state;
    return (
      <>
        <h1>Contacts</h1>
        <form onSubmit={this.handleAddContact}>
          <input
            type="text"
            value={name}
            onChange={this.handleChange}
            placeholder="Enter a contact"
          />
          <button type="submit">Add Contact</button>
        </form>
        <Contacts contacts={contacts} onDeleteContact={this.deleteContact} />
      </>
    );
  }
}

export default App;
