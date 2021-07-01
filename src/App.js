
import './App.css';
import LoginPage from './LoginPage'
import SignUp from './SignUp';
import {Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import BookTickets from './BookTickets';




function App() {
  return (
    <div >

      
      <BrowserRouter>
        <Switch>
      <Route exact path='/' component={LoginPage}/> 
      <Route exact path ="/SignUp" component={SignUp}/>
      <Route exact path ="/HomePage" component={HomePage}/>
      <Route exact path = "/BookTickets" component={BookTickets}/> 
    
      
       </Switch>
       </BrowserRouter>
        </div>
  );
}

export default App;
