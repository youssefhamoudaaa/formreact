import React from 'react'
import './App.css';
class field extends React.Component{
  render (){
    const{name,value,onChange}= this.props
return <div className="form-group">
  <label htmlFor={name}>le libele</label>
  <input type="text" value={value} onChange={onChange} id={name} name={name} className="form-control"/>
</div>
  }
}
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      nom: '',
      prenom: '',
      newsletter: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e){
    const name = e.target.name
    const type = e.target.type
    const value = type === 'checkbox' ? e.target.checked : e.target.value
    this.setState({
      [name]: value
    })
  }
  render() {
    console.log('render')
    return <div  className="formulaire">
      <div>
        <label htmlFor="nom">Nom</label><br></br>
        <input type="text" value={this.state.nom} onChange={this.handleChange} id="nom" name="nom"></input>
        
      </div>
      <div>
        <label htmlFor="prenom">Prenom</label><br></br>
        <input type="text" value={this.state.prenom} onChange={this.handleChange} id="prenom" name="prenom"></input>
        
      </div>
      
      <div>
        <label htmlFor="newsletter">S'abboner à Newsletter</label><br></br>
        <input type="checkbox" value={this.state.newsletter} onChange={this.handleChange} id="newsletter" name="newsletter"></input>
      
      </div>
      <div className="form-group">
        <button class="btn btn-primary">Envoyer</button>
      </div>
      </div>
    
  }
}



export default App;
