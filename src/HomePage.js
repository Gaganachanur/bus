import React from 'react';
import Slider from './Slider';
import Customer from './Customer';
import NavBar from './NavBar';
import Cards from './Cards';
import Footer from './Footer';
import Map from './Map';




export default  class HomePage extends React.Component{

    render(){
        return(<>
     
        <NavBar/>
        <Slider/>
        <Customer/>
        <Cards/>
         <Map/>
        <Footer/>
        
       
        

  </>);
    }
} 