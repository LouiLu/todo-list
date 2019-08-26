import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const onTitleChange = e => {
    setTitle(e.target.value);
  };

  return (
    <div className="input-group my-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter Todo Item..."
        value={title}
        onChange={onTitleChange}
      />
      <div className="input-group-append">
        <button
          className="btn btn-dark"
          type="button"
          id="add-todo"
          onClick={() => addTodo(title)}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

AddTodo.propTypes = {
  title: PropTypes.string,
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;
