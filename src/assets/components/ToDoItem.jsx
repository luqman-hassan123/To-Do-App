import React from 'react';

const ToDoItem = ({ title, description, priority, onDelete }) => {
  return (
    <div className="d-flex justify-content-between align-items-center to-do-item border p-2 mb-2">
      <div>
        <h6>{title}</h6>
        <p>{description}</p>
      </div>
      <div className="d-flex align-items-center">
        <span className="me-2">Priority: {priority}</span>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
