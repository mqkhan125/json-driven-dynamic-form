const Checkbox = ({ field, value, onChange }) => {
  return (
    <input
      type="checkbox"
      checked={value || false}
      onChange={(e) => onChange(field.name, e.target.checked)}
    />
  );
};

export default Checkbox;
