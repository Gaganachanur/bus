import React, { useState, Fragment } from "react";
import { Button } from "reactstrap";
import BookNavbar from "./BookNavbar";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import BTFooter from "./BTFooter.js";
import Book from "./Book.js";

const BookTickets = () => {
  const [data, setData] = useState(null);
  const [todata, setTodata] = useState(null);
  const [info, setInfo] = useState([]);
  const [abus, setAbus] = useState(0);

  const location = async () => {
    await fetch("http://localhost:3000/loc", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        source: data,
        desti: todata,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        const { rowCount, rows } = data;
        setAbus(rowCount);
        setInfo(rows);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const columnColor ={
      color:'red'
  }

  return (
    <Fragment>
      <BookNavbar />
      <label style={{ color: "BLUE" }} className="labelFHB">
        FROM :
      </label>
      <select
        style={{ color: "GREEN", border: "5px" }}
        onChange={(e)=>{setData(e.target.value)}}
        placeholder='select source'
        className="input"
      >
        <option>Hyderabad</option>
        <option>Banglore</option>
        <option>Mumbai</option>
        <option>Delhi</option>
      </select>
      <label style={{ color: "BLUE" }} className="labelTHB">
        DESTINATION :{" "}
      </label>
      <select
        style={{ color: "GREEN", border: "5px", borderColor: "black" }}
        onChange={(e)=>{ setTodata(e.target.value)}}
        className="input" 
        placeholder='select destination'
      >
        <option className="HBoptions">Banglore</option>
        <option>Hyderabad</option>
        <option>Delhi</option>
        <option>Mumbai</option>
      </select>
      <Button className="HBsearch" color="primary" size="lg"onClick={location} active>
        Search
      </Button>
      <h4>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <small>From:&nbsp;&nbsp;&nbsp;</small>{" "}
        <strong style={{ color: "blue" }}>{data}</strong>&nbsp;&nbsp;&nbsp; -->
        <small> To :&nbsp;&nbsp;&nbsp; </small>
        <strong style={{ color: "blue" }}> {todata}</strong> &nbsp; Available
        Buses -> <strong style={{ color: "blue" }}> {abus}</strong>{" "}
      </h4>{" "}
      <br />
     
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th style={columnColor}>Buses no</th>
            <th style={columnColor}>Source</th>
            <th style={columnColor}>Destination</th>
            <th style={columnColor}>Bus Name</th>
            <th style={columnColor}>Departure</th>
            <th style={columnColor}>Duration</th>
            <th style={columnColor}>Ratings</th>
            <th style={columnColor}>Seats</th>
            <th style={columnColor}>Fare </th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <td>
            {info.map((data) => {
              const { bus_no } = data;
              return <h5> {bus_no}</h5>;
            })}
          </td>
          <td>
            {info.map((data) => {
              const { source } = data;
              return <h5> {source}</h5>;
            })}
          </td>
          <td>
            {info.map((data) => {
              const { desti } = data;
              return <h5> {desti}</h5>;
            })}
          </td>
          <td>
            {info.map((data) => {
              const { bus_name } = data;
              return <h5> {bus_name}</h5>;
            })}
          </td>
          <td>
            {info.map((data) => {
              const { departure } = data;
              return <h5> {departure}</h5>;
            })}
          </td>
          <td>
            {info.map((data) => {
              const { duration } = data;
              return <h5> {duration}</h5>;
            })}
          </td>
          <td>
            {info.map((data) => {
              const { rating } = data;
              return <h5> {rating}</h5>;
            })}
          </td>
          <td>
            {info.map((data) => {
              const { seats } = data;
              return <h5> {seats}</h5>;
            })}
          </td>
          <td>
            {info.map((data) => {
              const { fare } = data;
              return <h5> {fare}</h5>;
            })}
          </td>
        </MDBTableBody>
      </MDBTable>
      {/* ==================================================================================================================================================== */}
      <Book />
      <marquee>
        <img
          height="200px"
          src="https://media1.giphy.com/media/YlYvNi3peKT6gsyurj/giphy.gif"
        />
      </marquee>
      <BTFooter />
    </Fragment>
  );
};

export default BookTickets;
