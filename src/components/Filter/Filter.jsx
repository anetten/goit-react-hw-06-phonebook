import css from './Filter.module.css';

export const Filter = ({ handleChangeFilter, filterValue }) => {
  return (
    <div className={css.filter_container}>
      <label className={css.filterLabel}>Find contacts by name</label>

      <input
        type="text"
        name="keyword"
        onChange={handleChangeFilter}
        value={filterValue}
        className={css.filter_input}
      />
    </div>
  );
};
