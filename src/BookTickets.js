import React,{ useState} from 'react';
import { Button } from 'reactstrap';
import BookNavbar from './BookNavbar';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import BTFooter from './BTFooter.js';

import Book from './Book.js'



// ----------------------------------------------------------------------------------------------------------
const BookTickets = () =>{
    const [data , setData] =useState(null)
    const [todata, setTodata] =useState(null)
    const [info ,setInfo] =useState([])
    const [abus ,setAbus]  =useState(0)

  


  
 const location   =() => {

        fetch('http://localhost:3000/loc', {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
        
           source:data,
           desti:todata
        
          }),
        })
        .then(response => response.json())
        .then((data) => {
           
          console.log('Success:', data);
          setAbus(data.rowCount)
         
          setInfo(data.rows)
  
        })
        .catch((error) => {
          console.error('Error:', error);
        });
         }

//------------------------------------------------------------------------------------------
   
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
<option >select source</option>
<option >Hyderabad</option>
  <option >Banglore</option>
  <option >Mumbai</option>
  <option >Delhi</option>
</select>

<label style={{color:'BLUE'}} className="labelTHB">DESTINATION : </label>
<select style={{color:'GREEN' , border:'5px' , borderColor:'black'}} onChange={to}  className="input">
<option >select destination</option>
<option  className="HBoptions">Banglore</option>
  <option>Hyderabad</option>
  <option >Delhi</option>
  <option>Mumbai</option>
</select>


 <Button  className="HBsearch"color="primary" size="lg" onClick={()=>{location()}}  active>search</Button>

  
 <h4 >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<small>From:&nbsp;&nbsp;&nbsp;</small> <strong style={{color:'blue'}}>{data}</strong>&nbsp;&nbsp;&nbsp; --><small> To :&nbsp;&nbsp;&nbsp; </small><strong  style={{color:'blue'}}> {todata}</strong> &nbsp; Available Buses -> <strong  style={{color:'blue'}}> {abus}</strong> </h4> <br/>
{/* //-- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
 <MDBTable>
      <MDBTableHead>
      <tr>
          <th style={{color:'red'}} >Buses no</th>
          <th style={{color:'red'}} >source</th>
          <th style={{color:'red'}}>Destination</th>
          <th style={{color:'red'}}>Bus Name</th>
          <th style={{color:'red'}}>Departure</th>
          <th style={{color:'red'}}>Duration</th>
          <th style={{color:'red'}}>Ratings</th>
          <th style={{color:'red'}}>Seats</th>
          <th style={{color:'red'}}>Fare </th>
      </tr>
        
      </MDBTableHead>
      <MDBTableBody> 
          <td>
            {
              info.map((userinfo)=>{
               return(
                 <h5>  {userinfo.bus_no}</h5>
                 
               ) 
              })
            }
              
          </td>
           
          <td>
            {
              info.map((userinfo)=>{
               return(
                 <h5>  {userinfo.source}</h5>
                 
               ) 
              })
            }
          </td>
          <td>
            {
              info.map((userinfo)=>{
               return(
                 <h5>  {userinfo.desti}</h5>
                 
               ) 
              })
            }
          </td>


          <td>
            {
              info.map((userinfo)=>{
               return(
                 <h5>  {userinfo.bus_name}</h5>
                 
               ) 
              })
            }
          </td>


          <td>
            {
              info.map((userinfo)=>{
               return(
                 <h5>  {userinfo.departure}</h5>
                 
               ) 
              })
            }
          </td>
        

          <td>
            {
              info.map((userinfo)=>{
               return(
                 <h5>  {userinfo.duration}</h5>
                 
               ) 
              })
            }
          </td>



          <td>
            {
              info.map((userinfo)=>{
               return(
                 <h5>  {userinfo.rating}</h5>
                 
               ) 
              })
            }
          </td>


          <td>
            {
              info.map((userinfo)=>{
               return(
                 <h5>  {userinfo.seats}</h5>
                 
               ) 
              })
            }
          </td>


          <td>
            {
              info.map((userinfo)=>{
               return(
                 <h5>  {userinfo.fare}</h5>
                 
               ) 
              })
            }
          </td>
      </MDBTableBody>
    </MDBTable>

{/* ==================================================================================================================================================== */}
    

    <Book/>

    
  
<BTFooter/>
   

</div>   
    )

    

}

export default BookTickets;