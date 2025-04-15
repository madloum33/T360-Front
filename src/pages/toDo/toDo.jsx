"use client"

import { useState } from "react"
import "./toDo.css"

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Meeting", completed: false, favorite: false },
    { id: 2, text: "Etudes n° xxxxxxx", completed: false, favorite: true },
    { id: 3, text: "Etudes n° xxxxxxx", completed: false, favorite: false },
    { id: 5, text: "Etudes n° xxxxxxx", completed: false, favorite: false },
  ])

  const toggleComplete = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const toggleFavorite = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, favorite: !todo.favorite } : todo)))
  }

  return (
    <div className="todo-container">
      <h1 className="todo-title">To-Do</h1>

      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item ">
            <div className="todo-content">
              <div
                className={`checkbox ${todo.completed ? "checked" : ""} ${todo.highlighted ? "checkbox-highlighted" : ""}`}
                onClick={() => toggleComplete(todo.id)}
              >
                {todo.completed && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                )}
              </div>
              <span className="todo-text">{todo.text}</span>
            </div>

            <button className="star-button" onClick={() => toggleFavorite(todo.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={todo.favorite ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`star-icon ${todo.favorite ? "favorite" : ""} ${todo.highlighted ? "star-highlighted" : ""}`}
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoList
