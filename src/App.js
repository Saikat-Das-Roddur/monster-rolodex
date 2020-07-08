import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './component/card-list/card-list.coponent';

class App extends Component {
  constructor(){
    super();
    this.state = {monsters:[]}
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(data=>this.setState({monsters:data}))
  }

  render(){
    
    return (
      <div className="App">
      <CardList
      monster = {this.state.monsters}/>
     
      </div>
    );
  }

}

export default App;
