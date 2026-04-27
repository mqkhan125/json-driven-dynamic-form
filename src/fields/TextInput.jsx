const TextInput = ({ field, value, onChange }) => {
  return (
    <input
      className="border p-2 rounded w-full"
      value={value || ""}
      onChange={(e) => onChange(field.name, e.target.value)}
    />
  );
};

export default TextInput;
