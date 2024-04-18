import { useState, useEffect } from "react";
import "./App.css";
import Create from "./components/Create";
import Todo from "./components/Todo";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/get")
      .then((result) => setTodos(result.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="flex w-screen flex-col items-center">
      <h2 className="text-3xl font-bold">To-do List</h2>
      <Create className="mt-10" />
      {todos.length === 0 ? (
        <p className="mt-5">Everything done! yay!</p>
      ) : (
        todos.map((todo, index) => <Todo key={index} task={todo.task} />)
      )}
    </main>
  );
}

export default App;
