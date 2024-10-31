// Modal.jsx
import React from 'react';
import Header from './Header';
import Buttons from './Buttons';
import Footer from './Footer';

const Modal = ({ title, description, priority, children, onClose}) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">

      <Header className="modal-header" title= "Item Details"/>
        {children}
        <p><strong>Title:</strong> {title}</p>
        <p><strong>Description:</strong> {description}</p>
        <p><strong>Priority:</strong> {priority}</p>
      
          <Buttons className="btn bg-primary" onButtonClick={onClose} title="close"/>
          <Footer className="card-footer" title="footer"> 
          </Footer>

      </div>
    </div>
  );
};

export default Modal;
