import React,{useState} from 'react';
import { Button } from 'reactstrap';
import BookNavbar from './BookNavbar';
import InfoTable from './Infotable';
import Footer from './Footer';





const BookTickets = () =>{
    const [data , setData] =useState(null)
    const [todata, setTodata] =useState(null)
   
function  from(event) {
   
    setData(event.target.value)
    
}
function to(event) {
   
    setTodata(event.target.value)
}
 
    
    
    return(
    <div >
    
    <BookNavbar/>
   
    
    
  
       
<label style={{color:'BLUE'}} className="labelFHB">FROM :</label>
<select style={{color:'GREEN' , border:'5px'}} onChange={from} className="input">
<option >HYDERABAD</option>
  <option >BANGLORE</option>
  <option >BOMBAY</option>
  <option >DELHI</option>
</select>

<label style={{color:'BLUE'}} className="labelTHB">DESTINATION : </label>
<select style={{color:'GREEN' , border:'5px' , borderColor:'black'}} onChange={to}  className="input">
<option  className="HBoptions">BANGLORE</option>
  <option>HYDERABAD</option>
  <option >DELHI</option>
  <option>BOMBAY</option>
</select>


 <Button  className="HBsearch"color="primary" size="lg"   active>search</Button>

  
 <h4 style={{color:'green'}}>From: {data} -> To : {todata} </h4> <br/>

  
 <InfoTable/>

<Footer/>
 

  </div>   
    )

    

}

export default BookTickets;