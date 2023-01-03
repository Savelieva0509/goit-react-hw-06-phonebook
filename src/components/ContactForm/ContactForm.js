// import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './ContactForm.module.css';

export default function ContactForm({ contacts, onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;

      case 'number':
        setNumber(event.currentTarget.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { value } = event.currentTarget.name;
    // const { contacts, onSubmit } = this.props;

    if (
      contacts.find(elem => elem.name.toLowerCase() === value.toLowerCase())
    ) {
      return alert(`${value} is already in contacts`);
    }

    reset();
    onSubmit({ name, number });
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label htmlFor="name" className={css.form__label}>
        Name
      </label>{' '}
      <input
        className={css.form__input}
        type="text"
        onChange={handleChange}
        value={name}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor="number" className={css.form__label}>
        Number{' '}
      </label>
      <input
        className={css.form__input}
        type="tel"
        onChange={handleChange}
        value={number}
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" className={css.form__button}>
        Add contact
      </button>
    </form>
  );
}

// class ContactForm extends Component {
//   static propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };

//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     const { value } = event.currentTarget.name;
//     const { contacts, onSubmit } = this.props;

//     if (
//       contacts.find(elem => elem.name.toLowerCase() === value.toLowerCase())
//     ) {
//       return alert(`${value} is already in contacts`);
//     }
//     this.reset();
//     onSubmit(this.state);
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} className={css.form}>
//         <label for="name" className={css.form__label}>
//           Name
//         </label>
//         <input
//           className={css.form__input}
//           type="text"
//           onChange={this.handleChange}
//           value={this.state.name}
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />

//         <label for="number" className={css.form__label}>
//           Number{' '}
//         </label>
//         <input
//           className={css.form__input}
//           type="tel"
//           onChange={this.handleChange}
//           value={this.state.number}
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />

//         <button type="submit" className={css.form__button}>
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

// export default ContactForm;
