import { setFilter } from '../../redux/contacts/contactsReducer';
import css from './Filter.module.css';

import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = event => {
    const value = event.target.value;
    dispatch(setFilter(value));
  };

  return (
    <div className={css.filter_container}>
      <label className={css.filterLabel}>Find contacts by name</label>

      <input
        type="text"
        name="keyword"
        onChange={handleChangeFilter}
        className={css.filter_input}
      />
    </div>
  );
};
