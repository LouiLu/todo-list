import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

const Todos = ({ todos, markComplete, delTodo }) => {
  return (
    <ul className="list-group list-group-flush">
      {todos.length > 0 ? (
        todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            markComplete={markComplete}
            delTodo={delTodo}
          />
        ))
      ) : (
        <div className="alert alert-info" role="alert">
          Add Some Todos to start with.
        </div>
      )}
    </ul>
  );
};

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default Todos;
