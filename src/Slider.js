import React from 'react';

import {Carousel} from 'react-bootstrap'
import bangloreimg from './images/BANNGALORE.jpg'
import delhi from './images/delhi.jpg'


export default class Slider extends React.Component{

render()
{
  return (<div>
  <Carousel>
  <Carousel.Item interval={2000} >
    <img
      className="sliderimg1"

      src={bangloreimg}
      alt="banglore"
    />
    <Carousel.Caption>
      <h2>BANGALORE</h2>
      <h3>Visit Bangalore The Silicon valley of India</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="sliderimg2"
      src="https://wallpaperaccess.com/full/2142411.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h2>HYDERABAD</h2>
      <h3>Visit Hyderabad to see Beautiful Charminar </h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="sliderimg3"
      src={delhi}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h2>DELHI</h2>
      <h3>Visit Delhi The Capital of India</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="sliderimg3"
      src="https://upload.wikimedia.org/wikipedia/commons/0/09/Mumbai_Aug_2018_%2843397784544%29.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h2>MUMBAI</h2>
      <h3>Visit Mumbai The city of Dreams</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

  </div>);
}
}