export const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contact by name
      <input type="text" name="filter" value={value} onChange={onChange} />
    </label>
  );
};
