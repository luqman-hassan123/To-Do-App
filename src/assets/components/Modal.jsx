// Modal.jsx
import React from 'react';

const Modal = ({ title, description, priority, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Item Details</h2>
        <p><strong>Title:</strong> {title}</p>
        <p><strong>Description:</strong> {description}</p>
        <p><strong>Priority:</strong> {priority}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
