import { useState } from "react";
import axios from "axios";

const Create = ({ ...props }) => {
  // State variables
  const [task, setTask] = useState("");

  // Event handlers
  const handleAdd = () => {
    axios
      .post("http://localhost:5000/add", { task: task })
      .then((result) => location.reload())
      .catch((res) => console.log(res));
  };

  return (
    <div className="flex flex-row" {...props}>
      <input
        type="text"
        className="mr-5 p-4 rounded-md"
        onChange={(e) => {
          setTask(e.target.value);
        }}
      ></input>
      <button className="bg-slate-600 px-4 py-2 rounded-md" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default Create;
