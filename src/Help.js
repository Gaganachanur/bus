
import React,{useState} from 'react';
import {Button,Modal,Bold} from 'react-bootstrap'

function Help() {
   
    const [lgShow, setLgShow] = useState(false);
  
    return (
      <>
       
        <Button  variant="light" onClick={() => setLgShow(true)}>Help ?</Button>
     
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Helpline support
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>Call  <strong> 9591557009</strong> for help or <br/>  Email to us at <strong>gaganachanur@gmail.com</strong>  </Modal.Body>
        </Modal>
      </>
    );
  }
  
  export default Help;