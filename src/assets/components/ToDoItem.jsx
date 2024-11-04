import React, { useState } from 'react';
// import './ToDoItem.css'; // Ensure you have this CSS file for styles

const ToDoItem = ({ title, description, priority, onDelete, onUpdate, onInfo }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="to-do-item d-flex align-items-center justify-content-between p-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="to-do-item-content flex-grow-1">
        <span className={`badge d-flex justify-content-center align-items-center ${priority.toLowerCase()}`}>{priority}</span>
        <strong className="ms-3">{title}</strong>
        <p>{description}</p>
      </div>

      <div className= {` to-do-item-options  ${isHovered ? 'show' : ''}`}
      >
      <button className="btn btn-info btn-sm mx-1" onClick ={() => onInfo ({title, description, priority}) }title="Info">
          Info
        </button>
        <button className="btn btn-warning btn-sm mx-1" onClick={onUpdate} title="Edit">
          Edit
        </button>
        <button className="btn btn-danger btn-sm mx-1" onClick={onDelete} title="Delete">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
