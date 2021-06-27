import React from 'react';
import { CardGroup, Card} from 'react-bootstrap';


export default class cards extends React.Component{


  render(){
return (<div style={{backgroundColor:'#BF1363'}}>

  <div   className="Container">
    <div className="row">
      <div className="col-md-4">
  <div className="card1">
  <Card>
    <Card.Img className="card1"  variant="top" src="https://media.istockphoto.com/photos/indian-family-celebrating-diwali-festival-with-fire-crackers-picture-id698710824?k=6&m=698710824&s=612x612&w=0&h=bUp5xZRVzv0QzKM6aHOo74xpoWz4PXjBsa1JeN7iXMU=" />
    <Card.Body>
      <Card.Title>Diwali offer</Card.Title>
      <Card.Text>
        Special discount of 20% - 30% offer for family trip on diwali 
        happy Diwali Trip
      </Card.Text>
    </Card.Body>
   
  </Card>
  
  </div>
  </div>



  <div className="col-md-4">
  <div className="card1">
  <Card>
    <Card.Img className="card2" variant="top" src="https://cdn.britannica.com/38/196638-131-7BF02881/Santa-Claus.jpg" />
    <Card.Body>
      <Card.Title>Christmas offer</Card.Title>
      <Card.Text>
      Special discount of 15% - 35% offer for family trip on Christmas
        Merry Christmas Trip.{' '}
      </Card.Text>
    </Card.Body>
    
  </Card>
  </div>
  </div>


  <div className="col-md-4">
  <div className="card1">
  <Card>
    <Card.Img className="card3" variant="top" src="https://www.fabhotels.com/blog/wp-content/uploads/2019/10/What-to.jpg" />
    <Card.Body>
      <Card.Title> Mysore Dussehra offer</Card.Title>
      <Card.Text>
        Special Discount upto 50% on dussera and there will special bus pick up
        and drop uptill complete festival days of dussera in Mysore both for Family and Friends 
      </Card.Text>
    </Card.Body>
  
  </Card>




  </div>
</div>

</div>
</div>
</div>)
  }
}