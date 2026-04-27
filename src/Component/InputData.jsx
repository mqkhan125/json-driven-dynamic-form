import { useEffect, useState } from "react";
import { fieldMap } from "../utils/fieldMap";

const InputData = ({ command }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (!command) return;

    const initial = {};

    command.fields.forEach((field) => {
      initial[field.name] =
        field.type === "checkbox" ? false : field.value || "";
    });

    setFormData(initial);
  }, [command]);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-blue-600">{command.name}</h2>

      {command.fields.map((field) => {
        const Component = fieldMap[field.type];

        if (!Component) return null;

        return (
          <div key={field.name} className="flex flex-col gap-1">  
            <label className="text-sm font-medium">{field.label}</label>

            <Component
              field={field}
              formData={formData}
              setFormData={setFormData}
              value={formData[field.name]}
              onChange={handleChange}
            />
          </div>
        );
      })}
    </div>
  );
};

export default InputData;
