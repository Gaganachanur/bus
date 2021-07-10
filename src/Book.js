import React ,{useState} from 'react'
import {Button ,Modal,Form,Col} from 'react-bootstrap'


function Book() {
  const [show, setShow] = useState(false);
  const [busno,setBusno] =useState();
  const [seatno,setSeatno] =useState(0);
  const [nofseats,setNofseats ] =useState(0);
  const [fare,setFare ] =useState(null);
  const [source, setSource] =useState(null)
  const [destination, setDestination] =useState(null)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const busid =(event) =>{


setBusno(event.target.value)
}
const noseats =(event) =>{

  let dummyseat =event.target.value
  setSeatno(parseInt(dummyseat))

  console.log(typeof(seatno))
  }
//---------------------------------------------------------------------------------------------
const Bookinformation =() => {

  fetch('http://localhost:3000/seats', {
    method: 'POST', // or 'POST'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
  
      bus:busno,
    }),
  })
  .then(response => response.json())
  .then((data) => {
    
    console.log('Success seats:', data);
     setNofseats(parseInt( data.rows[0].seats))
     setSource(data.rows[0].source)
     setDestination(data.rows[0].desti)
     setFare(parseInt( data.rows[0].fare))
  })
  .catch((error) => {
    console.error('Error:', error);
  });
   }


//--------------------------------------------------------------------------------------------  
 const BookTics = () => {

  fetch('http://localhost:3000/bootIt', {
    method: 'PUT', // or 'POST'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
  
      bus:busno,
      seat:(nofseats-seatno)
  
    }),
  })
  .then(response => response.json())
  .then((data) => {
    
    console.log('table updated', data);
   
 
  })
  .catch((error) => {
    console.error('Error:', error);
  });
   }
 
//---------------------------------------------------------------------------------------------
  return (
    <>  

< div className="container">

<div className="row">
<div className="col-md-5"></div>
<div className="col-md-7">
      <Button variant="success" size='lg' onClick={handleShow }>
        Book Your Tickets Now
      </Button>
 </div>
 </div>
 </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>BOOK TICKETS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Bus No</Form.Label>
      <Form.Control  type="text" placeholder="Enter bus no"  onChange={busid}  required/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>seats</Form.Label>
      <Form.Control type="number" placeholder="Enter seats you want" onChange={noseats}  required/>
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Gender</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>male</option>
        <option>Female</option>
        <option>other</option>
      </Form.Control>
    </Form.Group>

    
  </Form.Row>

  
   <br/><br/>
  <Button variant="danger"  onClick={Bookinformation}>
    Book Tickets
  </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <Button variant="warning"  onClick={BookTics}>
    Confirm Tickets
  </Button>
</Form>




        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>

      <h2>your <strong style={{color:'red'}}>{seatno} </strong>Tickets has been successfully booked on bus no <strong style={{color:'red'}}>{busno}</strong>  route to <strong style={{color:'red'}}>{source}</strong> to<strong style={{color:'red'}}> {destination}</strong> happy journey <br/> and cost is<strong style={{color:'red'}}> {fare * seatno}</strong> </h2>
    </>
  );
}
export default Book;
