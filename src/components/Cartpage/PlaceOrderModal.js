import React from "react";
import { Button, Modal } from "react-bootstrap";

const CreateItoModal = ({ show, setShow, successMsg }) => {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Modal
      size="sm"
      show={show}
      onHide={handleClose}
      style={{ opacity: 1 }}
      centered
    >
      <div className="modal-header border-0">
        <button type="button" className="close" onClick={handleClose}>
          <span className="font-18">&times;</span>
        </button>
      </div>
      <Modal.Body className="text-center">
        <h5>{successMsg}</h5>
        <p>
          <a href="http://3.129.8.167:30050/history.html" target="_blank">
            Click to see history
          </a>
        </p>
        <button
          type="button"
          className="btn btn-primary w-25 btn-md"
          onClick={handleClose}
        >
          Ok
        </button>
      </Modal.Body>
      <Modal.Footer className="border-0"></Modal.Footer>
    </Modal>
  );
};

export default CreateItoModal;
