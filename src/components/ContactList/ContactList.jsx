import propTypes from 'prop-types';
import style from './ContactList.module.css'


export const ContactList = ({ contacts, deleteContact }) => (
    <div>
        <ul className={style.contactsList}>
        {contacts.map(({id, name, number }) => (
            <li className={style.contactsListItem} key={id}>
            {name}: {number}
                <button className={style.btn} type="button" onClick={() => deleteContact(id)}>
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
};