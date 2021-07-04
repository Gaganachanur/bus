import React,{ useState} from 'react';
import { Button } from 'reactstrap';
import BookNavbar from './BookNavbar';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import BTFooter from './BTFooter.js';
// ----------------------------------------------------------------------------------------------------------
const BookTickets = () =>{
    const [data , setData] =useState(null)
    const [todata, setTodata] =useState(null)
    const [abus ,setAbus]  =useState(0)
    const [source, setSource] =useState("-")
    const [desti ,setDesti] =useState("-")
    const [busno,setBusno] =useState(0)
    const [bname,setBname] =useState('-')
    const [depar, setDepar] =useState('-')
    const [dura, setDura] =useState('-')
    const [rate, setRate] =useState('-')
    const [seat , setSeat] =useState('-')
    const [fare , setFare] =useState('-')

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
        
          
        let i=-1
         const limitedInterval = setInterval(() => {     
          i++

          if (i > data.rowCount-2) {
            clearInterval(limitedInterval);
          
          }
          setBusno( data.rows[i].bus_no)
          setSource(data.rows[i].source)
          setDesti(data.rows[i].desti)
          setBname(data.rows[i].bus_name)
          setDepar(data.rows[i].departure)
          setDura(data.rows[i].duration)
          setRate(data.rows[i].rating)
          setSeat(data.rows[i].seats)
          setFare(data.rows[i].fare)
        },  1000);
         
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
let Avai = JSON.stringify(abus)
let num = JSON.stringify(busno)
let frm = JSON.stringify(source)
let des= JSON.stringify(desti)
let bn= JSON.stringify(bname)
let dep  = JSON.stringify(depar)
let dur= JSON.stringify(dura)
let rat = JSON.stringify(rate)
let sea= JSON.stringify(seat)
let price= JSON.stringify(fare)




    
    return(
    <div >
    
    <BookNavbar/>     
<label style={{color:'BLUE'}} className="labelFHB">FROM :</label>
<select style={{color:'GREEN' , border:'5px'}} onChange={from} className="input">
<option >HYDERABAD</option>
  <option >Banglore</option>
  <option >Mumbai</option>
  <option >DELHI</option>
</select>

<label style={{color:'BLUE'}} className="labelTHB">DESTINATION : </label>
<select style={{color:'GREEN' , border:'5px' , borderColor:'black'}} onChange={to}  className="input">
<option  className="HBoptions">BANGLORE</option>
  <option>HYDERABAD</option>
  <option >DELHI</option>
  <option>Mumbai</option>
</select>


 <Button  className="HBsearch"color="primary" size="lg" onClick={()=>{location()}}  active>search</Button>

  
 <h4 >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<small>From:&nbsp;&nbsp;&nbsp;</small> <strong style={{color:'blue'}}>{data}</strong>&nbsp;&nbsp;&nbsp; --><small> To :&nbsp;&nbsp;&nbsp; </small><strong  style={{color:'blue'}}> {todata}</strong> &nbsp; Available Buses -> <strong  style={{color:'blue'}}> {Avai}</strong> </h4> <br/>

 <MDBTable striped>
      <MDBTableHead>
        <tr>
          <th scope='col'>Buses</th>
          <th scope='col'>source</th>
          <th scope='col'>destination</th>
          <th scope='col'>Bus Name</th>
          <th scope='col'>Departure</th>
          <th scope='col'>Duration</th>
          <th scope='col'>Ratings</th>
          <th scope='col'>Seats</th>
          <th scope='col'>Fare</th>
          <th scope='col'></th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope='row'>{num}</th>
          <td>{frm}</td>
          <td>{des}</td>
          <td>{bn}</td>
          <td>{dep}</td>
          <td>{dur}</td>
          <td>{rat}</td>
          <td>{sea}</td>
          <td>{price}</td>
          <td><Button color="primary">BOOK</Button></td>
        </tr>
        <tr>
        <th scope='row'>{num}</th>
          <td>{frm}</td>
          <td>{des}</td>
          <td>{bn}</td>
          <td>{dep}</td>
          <td>{dur}</td>
          <td>{rat}</td>
          <td>{sea}</td>
          <td>{price}</td>
          <td><Button color="primary">BOOK</Button></td>
        </tr>
        <tr>
        <th scope='row'>{num}</th>
          <td>{frm}</td>
          <td>{des}</td>
          <td>{bn}</td>
          <td>{dep}</td>
          <td>{dur}</td>
          <td>{rat}</td>
          <td>{sea}</td>
          <td>{price}</td>
          <td><Button color="primary">BOOK</Button></td>
        </tr>
        <tr>
          <th scope='row'>{num}</th>
          <td>{frm}</td>
          <td>{des}</td>
          <td>{bn}</td>
          <td>{dep}</td>
          <td>{dur}</td>
          <td>{rat}</td>
          <td>{sea}</td>
          <td>{price}</td>
          <td><Button color="primary">BOOK</Button></td>
        </tr>
        <tr>
        <th scope='row'>{num}</th>
          <td>{frm}</td>
          <td>{des}</td>
          <td>{bn}</td>
          <td>{dep}</td>
          <td>{dur}</td>
          <td>{rat}</td>
          <td>{sea}</td>
          <td>{price}</td>
          <td><Button color="primary">BOOK</Button></td>
        </tr>
        <tr>
        <th scope='row'>{num}</th>
          <td>{frm}</td>
          <td>{des}</td>
          <td>{bn}</td>
          <td>{dep}</td>
          <td>{dur}</td>
          <td>{rat}</td>
          <td>{sea}</td>
          <td>{price}</td>
          <td><Button color="primary">BOOK</Button></td>
        </tr>
      </MDBTableBody>
    </MDBTable>

 
<BTFooter/>
   

</div>   
    )

    

}

export default BookTickets;