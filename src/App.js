import logo from './logo.svg';
import './App.css';
import {Button,FormLabel,FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import React , {Component} from 'react'

class Form extends Component{

}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormLabel >Nom</FormLabel>
        <FormControl type="text" required></FormControl >
        <FormLabel >Prenom</FormLabel>
        <FormControl type="text" required></FormControl>
        <FormLabel >Age</FormLabel>
        <FormControl type="date" required></FormControl>
        <FormLabel >Email</FormLabel>
        <FormControl type="text" placeholder="****@gmail.com" pattern=".+@gmail.com" required></FormControl>
        <FormLabel >Password</FormLabel>
        <FormControl type="password" minLength="8" required></FormControl>
        <br></br>
        <Button variant='success' type="submit">Login</Button>
        
        
        
      </header>
    </div>
  );
}



export default App;
