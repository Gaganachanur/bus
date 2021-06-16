
import './App.css';
import Body from './body'
import SignUp from './SignUp';
import {Switch, Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div >
      <BrowserRouter>
        <Switch>
      <Route exact path='/' component={Body}/> 
      <Route exact path ="/SignUp" component={SignUp}/>
       </Switch>
       </BrowserRouter>
       
       
    </div>
  );
}

export default App;
