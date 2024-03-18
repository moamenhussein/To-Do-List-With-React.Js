import "./App.css";
import { React, useRef, useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();
  const handleToDo = () => {
    const text = inputRef.current.value;
    const newItem = { completed: false, text };
    setTodos([...todos, newItem]);
    inputRef.current.value = "";
  };
  const handleItemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };
  const handleDeletItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="App">
      <h2 className="heading">To Do List</h2>
      <input type="text" ref={inputRef} placeholder="Enter Item..." />
      <button onClick={handleToDo}>Add Task</button>
      <div className="to-do-container">
        <ul>
          {todos.map(({ text, completed }, index) => {
            return (
              <div className="item">
                <li
                  key={index}
                  className={completed ? "done" : ""}
                  onClick={() => {
                    handleItemDone(index);
                  }}
                >
                  {text}
                </li>

                <span className="delete"
                  onClick={() => {
                    handleDeletItem(index);
                  }}
                >
                  ❌
                </span>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default App;
