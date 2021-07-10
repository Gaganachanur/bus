
import React from 'react';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Map =() =>{

    return(
        <div>
            <div style={{backgroundColor:'#BF1363'}} >
              .<br></br><br></br><br></br><br></br><br></br><br/><br/>.
                </div>

                <div className="map">
         <img height="500px" src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Worldmap2-BNPParibas.jpg"/>
           <div className='vision'>
             <h1 style={{color:'#52006A'}}>Our Vision </h1>
             
             </div>

             <h3 className="visionsent">We are in a Mission to make every one in the world to have Good Memories <br/>
                 of their Journey throught the life 
                 join hands with us book your Journey now  </h3>
                 
      
                       </div>


                       <div className="Lastbutton">
                  <Link to='./BookTickets'  >  <Button size='lg'  rounded variant="success">BOOK YOUR JOURNEY</Button></Link>
                        </div>

        </div>
    )
}
export default Map;