import React from "react";
import "./todos.css";
import PropTypes from "prop-types";

const Todo = ({ onClick, onDeleteClick, completed, text }) => (
  <div className="todo">
    <li>
      <div
        onClick={onClick}
        style={{
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        {text}
        <button className="x-button" onClick={onDeleteClick} aria-hidden="true">
          &times; Remove
        </button>
      </div>
    </li>
  </div>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
