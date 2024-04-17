import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <h2 className="text-3xl font-bold">To-do List</h2>
    </>
  );
}

export default App;
