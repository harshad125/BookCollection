import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function Temp(props) {
  const [show, setShow] = useState(props.val);
 


  return (
    <>
      <ToastContainer position="top-end" className="p-3">
        <Toast  onClose={() => setShow(false)} show={show} delay={4000} autohide >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Update Information</strong>
          </Toast.Header>
          <Toast.Body>{props.tx}</Toast.Body>
        </Toast>
        </ToastContainer>
        </>
  )
}

export default Temp
