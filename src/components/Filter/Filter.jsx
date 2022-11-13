import PropTypes from 'prop-types';
import style from './Filter.module.css'

export const Filter = ({ filter, onChange }) => {
    return (
        <label className={style.label}>Find contacts by name
            <input className={style.input}
                type='name'
                value={filter}
                onChange={onChange}
            />
        </label>
    );
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}