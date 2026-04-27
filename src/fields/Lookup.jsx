const Lookup = ({ field, value, formData, setFormData, onChange }) => {
  const selected = field.values.find((v) => v.option === value);

  return (
    <div>
      {/* DROPDOWN */}
      <select
        className="border p-2 rounded w-full"
        value={value || ""}
        onChange={(e) => onChange(field.name, e.target.value)}
      >
        <option value="">Select option</option>

        {field.values.map((opt) => (
          <option key={opt.option} value={opt.option}>
            {opt.option}
          </option>
        ))}
      </select>

      {/* NESTED FIELDS */}
      {selected?.fields?.map((subField) => (
        <div key={subField.name} className="ml-4 border-l pl-3 mt-2">
          <label className="text-sm">{subField.label}</label>

          {subField.type === "text" && (
            <input
              className="border p-2 rounded w-full"
              value={formData[subField.name] || ""}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  [subField.name]: e.target.value,
                }))
              }
            />
          )}

          {subField.type === "textarea" && (
            <textarea
              className="border p-2 rounded w-full"
              value={formData[subField.name] || ""}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  [subField.name]: e.target.value,
                }))
              }
            />
          )}

          {subField.type === "checkbox" && (
            <input
              type="checkbox"
              checked={formData[subField.name] || false}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  [subField.name]: e.target.checked,
                }))
              }
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Lookup;