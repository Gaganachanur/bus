import React from 'react';
import facebook from './images/facebookicon.png';
import youtube  from './images/youtubeicon.jpg'


export default class BTFooter extends React.Component{



    render()
    {
        return (
            <div className="bTFooter">
             
               <div  className="about" style={{color:'black'}}>

               < div className="container">

                   <div className="row">
                       <div className="col-md-3">
                           <h3>About us</h3>
                           &nbsp;&nbsp;&nbsp;
                           <h5>Adventure Travles</h5>
                           <h5>contact us</h5>
                           <h5>Mobile version</h5>
                           <h5>adventure mobile</h5>
                           <h5>site map</h5>
                           <h5>offers</h5>
                           <h5>careers</h5>
                           <h5>values</h5>
                        
                           </div>

                           <div className="col-md-3">
                           <h3>Developer contact</h3>
                           &nbsp;&nbsp;&nbsp;
                           <h5> git hub</h5>
                           <h5>+91 9591557009</h5>
                           <h5>gaganachanur@gmail.com</h5>
                           <h5> twitter</h5>
                           <h5>Linkedin</h5>
                           <h5> blog</h5>
                           </div>

                           <div className="col-md-3">
                           <h3>co partners</h3>
                           &nbsp;&nbsp;&nbsp;
                           <h5> jobsy</h5>
                           <h5>https://jobsy.co.in/</h5>
                           <h5>email</h5>
                           <h5> twitter</h5>
                           <h5>Linkedin</h5>
                           <h5> blog</h5>
                           </div>
                           
                           <div className="col-md-3">
                               
                           <h3>social media</h3>
                           &nbsp;&nbsp;&nbsp;<br/>
                           
                           <img  height="50px "src="https://thumbs.dreamstime.com/b/glowing-neon-line-bus-icon-isolated-blue-background-transportation-concept-tour-transport-sign-tourism-public-vehicle-symbol-213246949.jpg" /><br/><br/>
                            <img height="25px" src="https://jobsy.co.in/src/assets/images/jobsy-logo-new-0897726b88ce6973b7bf9d476e267505.png" /><br/><br/>
                            <img height="50px" src={facebook}/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <img height="50px" src={youtube}/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                             <img height="30px" src="https://www.pinclipart.com/picdir/big/51-512064_homeabout-meblogcontact-linkedin-icon-png-black-square-clipart.png"/>
                             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <img height="30px" src='https://assets.dragoart.com/images/13143_501/how-to-draw-twitter-draw-the-twitter-logo_5e4ca489789dc0.44078033_59530_3_3.png'/>
                           </div>
                       </div>
                   </div>

                   
                   

                   </div>
                   
        </div>
        )
    }

}