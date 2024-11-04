import React from "react";
import Header from "./Header";
import Button from "./Buttons";
import Footer from "./Footer";

const Modal = ({
  title,
  description,
  priority,
  children,
  onClose,
  isModalOpen,
}) => {
  return (
    <>
      {/* Modal overlay background */}
      {isModalOpen && <div className="modal-backdrop fade show"></div>}

      {/* Modal container */}
      <div
        id="staticBackfrop"
        className={`
          modal fade ${isModalOpen ? 'show dropdown-modal' : ''}`}
          style={{ display: isModalOpen ? "block" : "none" }}
          role="dialog"
          aria-modal="true"
          tabIndex = "-1"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal header */}
            <div className="modal-header">
              <Header className="modal-title fw-bold " title="Item Details" />
              <button
                type="button"
                className="btn btn-close "
                onClick={onClose}
              ></button>
            </div>

            {/* Modal body */}
            <div className="modal-body">
              {children}
              <p>
                <strong>Title:</strong> {title}
              </p>
              <p>
                <strong>Description:</strong> {description}
              </p>
              <p>
                <strong>Priority:</strong> {priority}
              </p>
            </div>

            {/* Modal footer */}
            <div className="modal-footer">
              <Footer className="card-footer" title="" />
              <Button
                type="button"
                className="btn btn-danger d-flex justify-content-center align-items-center"
                onButtonClick={onClose}
                title="Close"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
