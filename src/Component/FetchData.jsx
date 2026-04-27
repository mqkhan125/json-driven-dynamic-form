import { useState } from "react";
import jsonData from "../JsonData/jsonData.json";
import InputData from "./InputData";

const FetchData = () => {
  const [data] = useState(jsonData);
  const [selectedCommand, setSelectedCommand] = useState(null);

  return (
    <div className="w-full min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="w-full max-w-2xl bg-white p-6 rounded shadow">
        {/* COMMAND SELECT */}
        <select
          className="w-full border p-2 rounded mb-6"
          onChange={(e) => {
            const selected = data.find((cmd) => cmd.name === e.target.value);
            setSelectedCommand(selected);
          }}
        >
          <option value="">Select Command</option>
          {data.map((cmd) => (
            <option key={cmd.name} value={cmd.name}>
              {cmd.name}
            </option>
          ))}
        </select>

        {/* FORM */}
        {selectedCommand ? (
          <InputData command={selectedCommand} />
        ) : (
          <p className="text-gray-500 text-center">Please select a command</p>
        )}
      </div>
    </div>
  );
};

export default FetchData;
