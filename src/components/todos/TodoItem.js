import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo, markComplete, delTodo }) => {
  const { id, title, completed } = todo;
  return (
    <li
      key={id}
      className="list-group-item d-flex justify-content-between align-items-center px-0"
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
      <label className="checkbox-wrapper">
        <input type="checkbox" onChange={() => markComplete(id)} />
        <span className="checkmark"></span>
        {title}
      </label>

      <button className="btn btn-danger" onClick={() => delTodo(id)}>
        <i className="fas fa-times" />
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default TodoItem;
