export const Contacts = ({contacts}) => {
  return (
    <ul>
        {contacts.map(contact => {
            return (
                <li key={contact.id}></li>
            )
        })}
    </ul>
  );
};
