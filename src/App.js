
import './App.css';
import NavBare from './components/NavBare' ;
import Home from './components/Home' ;
import Profiles from './components/Profiles' ;
import Login from './components/Login' ;
import { Route, Switch } from 'react-router-dom';
import {Users} from './components/User'
import Details from './components/Details' ;
function App() {
  return (
    <div className="App">
     <NavBare/>
     <Switch>
     <Route exact path="/" component ={Home} /> 
    {/* <Route path="/Profiles" > 
     
     <Profiles user = {Users} />
     
     </Route> */}

     <Route path = "/Profiles" render ={() => <Profiles user = {Users} /> }/>

     <Route path="/Login" component ={Login} />
     <Route path ="/Details/:id" render ={(props) => <Details {...props} user = {Users} />}  />

     </Switch>
    </div>
  );
}

export default App;
