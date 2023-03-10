import { useState } from 'react';
// import PropTypes from 'prop-types';
import { Form, Label, Input, Button } from './ContactForm.styled';

import { useSelector, useDispatch } from 'react-redux';
import { create } from '../../redux';
import { nanoid } from 'nanoid';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactsList = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();

    const newContact = { name, number, id: nanoid() };
    if (
      contactsList.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(create(newContact));
    }
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        {' '}
        Name
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onInput={handleChange}
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}
