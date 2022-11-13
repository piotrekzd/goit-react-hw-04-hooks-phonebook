import propTypes from 'prop-types';
import style from './ContactList.module.css'


export const ContactList = ({ contacts, deleteContact }) => (
    <div>
        <ul className={style.list}>
        {contacts.map((contact) => (
            <li className={style.listItem} key={contact.id}>
            {contact.name}: {contact.number}
                <button className={style.btn} type="button" onClick={() => deleteContact(contact.id)}>
                Delete
            </button>
            </li>
        ))}
        </ul>
    </div>
);

ContactList.propTypes = {
    contacts: propTypes.arrayOf(
        propTypes.exact({
            id: propTypes.string.isRequired,
            name: propTypes.string.isRequired,
            number: propTypes.string.isRequired,
        })
    ),
    deleteContact: propTypes.func.isRequired
};