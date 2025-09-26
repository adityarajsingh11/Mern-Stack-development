import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TodoList.css";

function TodoList() {
  let [todos, setTodos] = useState([
    { task: "sample-task", id: uuidv4(), isDone: false }
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    if (newTodo.trim() !== "") {
      setTodos((prevTodos) => [
        ...prevTodos,
        { task: newTodo, id: uuidv4(), isDone: false }
      ]);
      setNewTodo("");
    }
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  let upperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        task: todo.task.toUpperCase()
      }))
    );
  };

  let UpperCaseOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, task: todo.task.toUpperCase() } : todo
      )
    );
  };

  let markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: true } : todo
      )
    );
  };

  let markAllDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        isDone: true
      }))
    );
  };

  return (
    <div className="todo-container">
      <h2 className="todo-title">Todo List</h2>

      <div className="todo-input-section">
        <input
          className="todo-input"
          placeholder="Add a task"
          value={newTodo}
          onChange={updateTodoValue}
        />
        <button className="todo-add-btn" onClick={addNewTask}>
          Add Task
        </button>
      </div>

      <h4 className="todo-subtitle">Tasks To Do</h4>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span className={`todo-task ${todo.isDone ? "done" : ""}`}>
              {todo.task}
            </span>
            <div className="todo-buttons">
              <button
                className="todo-btn btn-done"
                onClick={() => markAsDone(todo.id)}
              >
                Done
              </button>
              <button
                className="todo-btn btn-upper"
                onClick={() => UpperCaseOne(todo.id)}
              >
                UpperCase
              </button>
              <button
                className="todo-btn btn-delete"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="todo-footer">
        <button
          className="todo-footer-btn btn-uppercase-all"
          onClick={upperCaseAll}
        >
          UpperCase All
        </button>
        <button
          className="todo-footer-btn btn-mark-all"
          onClick={markAllDone}
        >
          Mark All Done
        </button>
      </div>
    </div>
  );
}

export default TodoList;
