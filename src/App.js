import { useRef, useState } from "react";
import "./App.css";
import Item from "./Item";

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setTodos([
        ...todos,
        {
          text: e.target.value,
          completed: false,
          id: Date.now(),
        },
      ]);
      inputRef.current.value = "";
    }
  };

  const handleCompleted = (id) => {
    const updatedList = todos.map((e) => {
      if (e.id === id) {
        e.completed = !e.completed;
      }
      return e;
    });
    setTodos(updatedList);
  };

  const deleteTodo = (id) => {
    const filter = todos.filter((e) => e.id !== id);
    setTodos(filter);
  };

  const editTodo = (id, text) => {
    const updatedList = todos.map((e) => {
      if (e.id === id) {
        e.text = text;
      }
      return e;
    });

    setTodos(updatedList);
  };

  return (
    <div className="App">
      <input type="text" ref={inputRef} onKeyPress={handleKeyPress} />
      {todos.map((e) => (
        <Item
          {...e}
          key={e.id}
          handleCompleted={handleCompleted}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}

export default App;
