import React, { useState } from 'react';
import './App.css';
import uuid from 'uuid';

// components
import Navbar from './components/layouts/Navbar';
import AddTodo from './components/todos/AddTodo';
import Todos from './components/todos/Todos';

function App() {
  // hooks
  const [todos, setTodos] = useState([]);

  // add todo item
  const addTodo = title => {
    const data = { id: uuid.v4(), title, completed: false };
    setTodos([...todos, data]);
  };

  // del todo item
  const delTodo = id => {
    setTodos([...todos.filter(todo => todo.id !== id)]);
  };

  // mark complete
  const markComplete = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} markComplete={markComplete} delTodo={delTodo} />
      </div>
    </div>
  );
}

export default App;
