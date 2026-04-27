const TextArea = ({ field, value, onChange }) => {
  return (
    <textarea
      className="border p-2 rounded w-full"
      value={value || ""}
      onChange={(e) => onChange(field.name, e.target.value)}
    />
  );
};

export default TextArea;
