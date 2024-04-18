import { useState, useEffect } from "react";
import "./App.css";
import Create from "./components/Create";
import Todo from "./components/Todo";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  const handleCheck = (id) => {
    axios
      .put(`http://localhost:5000/check/${id}`)
      .then((result) => {
        console.log(result);
        location.reload();
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/delete/${id}`)
      .then((result) => {
        console.log(result);
        location.reload();
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/get")
      .then((result) => setTodos(result.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="flex w-screen flex-col items-center">
      <h2 className="text-3xl font-bold">To-do List</h2>
      <Create className="my-10" />
      {todos.length === 0 ? (
        <p className="mt-5">Everything done! yay!</p>
      ) : (
        todos.map((todo, index) => (
          <Todo
            key={todo._id}
            task={todo}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ))
      )}
    </main>
  );
}

export default App;
