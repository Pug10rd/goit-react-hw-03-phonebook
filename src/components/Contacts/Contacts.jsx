import PropTypes from 'prop-types';
export const Contacts = ({ contacts, onDelete }) => {
    console.log('contacts', contacts);
    return (
      <>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(({ id, name, number }) => (
            <li key={id}>
              <span>{name}: </span>
              <span>{number}</span>
              <button type="button" onClick={() =>onDelete(id)}>Delete</button>
            </li>
          ))}
        </ul>
      </>
    );
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
}