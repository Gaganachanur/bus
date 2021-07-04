import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';




export default function App(props) {
  return (
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
          <th scope='col'>Fare</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope='row'></th>
          <td>Banglore</td>
          <td>delhi</td>
          <td>Peace bus</td>
          <td>12:00 am</td>
          <td>6h15min</td>
          <td>4.5</td>
          <td>450/-</td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td>Banglore</td>
          <td>Delhi</td>
          <td>Dulex bus</td>
          <td>01:00 am</td>
          <td>5h30min</td>
          <td>4</td>
          <td>400/-</td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td colSpan={2}>Banglore</td>
          <td>ultra A/C bus</td>
          <td>12:30min</td>
          <td>6h10min</td>
          <td>3.7</td>
          <td>500/-</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}