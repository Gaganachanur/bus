import React ,{useState} from 'react';
import {Modal , Button} from 'react-bootstrap';
import UpdateProfile from './UpdateProfile';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          <h4>Profile</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <UpdateProfile/>
         
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function Profile() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="link" onClick={() => setModalShow(true)}>
         Update Profile
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  
export default Profile;
