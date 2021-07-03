import React from 'react';
import { Spinner,Image , Col} from 'react-bootstrap'
import { MDBCard,  MDBCardOverlay ,MDBCardImage } from 'mdb-react-ui-kit';

const Customer = () =>{

    return(<>
   <div className="Container">
	<div className="row">
		<div className="col-sm-6">
			<div className="facilities">
				<Spinner animation="grow" variant="success" />
				<Spinner animation="border" variant="info" size="sm" />
				<br/>
				<br/>
				<h2>We Provide Grate facility  to our passengers inside the bus proper breaks between the  journey 
                        and also we will  suggest Hotel from which our passengers get reasonable Discount </h2> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<Spinner animation="grow" variant="primary" size="sm" />
				<Spinner animation="border" variant="success" />
				<Spinner animation="grow" variant="warning" size="sm" />
				<Spinner animation="border" variant="danger" /> </div>
		</div>
		<div className="col-md-6">
			<div className="businsideimg">   <MDBCard background='dark' className='text-white'>
      <MDBCardImage overlay src='http://brandblast.com/wp-content/uploads/people-on-bus.jpg' alt='happy passengers' />
      <MDBCardOverlay>
        
       
      </MDBCardOverlay>
    </MDBCard></div>
		</div>
	</div>
    
    <div className="row">
    <div className="col-md-7">
          
        </div>
        <div className="col-md-5">
            <div  >
         <h1 style={{color:'#AA2EE6'}}>Customer Satisfaction <Spinner animation="grow" variant="primary" /></h1>
         
         </div>
        </div>
    </div>
	<div className="row">
		<div className="col-md-6">
			<div className="busimage"> <img height="400px" src="https://cdn.picpng.com/bus/bus-white-travel-vector-101280.png" /> </div>
		</div>
		<div className="col-md-3">
			<div  className="review1" >
				<Col xs={6} md={4}>
					<Image height="200px" src="https://media.istockphoto.com/photos/cheerful-indian-girl-standing-at-home-office-looking-at-camera-picture-id1198252595?k=6&m=1198252595&s=612x612&w=0&h=_BWwFh2PkfdBsGgSpmSZuI8cLG-mDeqWh252ltDfGik=" roundedCircle /> </Col>
				<br/>
				<h5>I have very Memorable  travel exprience with Adventure travels when we went to delhi later Himalaya,
                              I like to thank you for making our journey so special . </h5> 
                              <img height ="150px" src="https://i1.wp.com/www.applehouse.co.uk/wp-content/uploads/2015/07/screen-shot-2015-07-09-at-15-10-11.png"/>


                 </div>
                            
                              
		</div>
        <div className="col-md-3">
            <div className="review2">
            <Col xs={6} md={4}>
					<Image height="200px" src="https://i.pinimg.com/originals/65/fb/06/65fb063447a36a5d03a88bb6f90f98bd.jpg" roundedCircle />
                     </Col><br/>
                     <h5>My journey was Delightful I enjoyed with my Grandchildren throught the journey I was impressed by the facility and safety measures
                          given to old age citizens and also childrens.   </h5> 
                              <img height ="150px" src="https://i1.wp.com/www.applehouse.co.uk/wp-content/uploads/2015/07/screen-shot-2015-07-09-at-15-10-11.png"/>
          </div>
          
       
        </div>
    
	</div>
</div>

    </>)
}
export default Customer;