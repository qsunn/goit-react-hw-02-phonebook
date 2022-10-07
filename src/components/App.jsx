import { Component } from 'react';
import { ContactList } from './ContactList';
import { ContactForm } from './ContactForm ';
import { Filter } from './Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  searchHandler = e => {
    this.setState({ filter: e.target });
  };

  onAddContact = data => {
    const filtered = this.state.contacts.filter(
      contact => contact.name === data.name
    );
    filtered.length
      ? alert(`${data.name} already exists`)
      : this.setState({
          contacts: [data, ...this.state.contacts],
        });
  };

  deleteContact = id => {
    this.setState({
      contacts: [...this.state.contacts.filter(contact => contact.id !== id)],
    });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 40,
          color: '#010101',
          padding: 32,
        }}
      >
        <h1 className="title">Phonebook</h1>
        <ContactForm onAddContact={this.onAddContact} />

        <h2 className="title">Contacts</h2>
        <Filter searchHandler={this.searchHandler} filter={filter} />
        <ContactList
          contacts={contacts}
          filter={filter}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
