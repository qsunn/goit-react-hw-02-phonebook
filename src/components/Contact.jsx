import { PropTypes } from 'prop-types';

export const Contact = ({ contact, deleteContact }) => {
  return (
    <li>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button
        type="button"
        className="delete"
        onClick={deleteContact.bind(this, contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
