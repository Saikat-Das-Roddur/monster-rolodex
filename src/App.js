import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './component/card-list/card-list.coponent';
import { SearchBox } from './component/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField:''
    }
    
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(data=>this.setState({monsters:data}))
  }

  
  render(){
    const filteredMonster = this.state.monsters.filter(monster=> monster.name.toLowerCase().includes(this.state.searchField.toLowerCase()))

    return (
      <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox placeholder = {'Search Monster'} handlechange = {(e)=>this.setState({searchField:e.target.value})}/>
      <CardList monster = {filteredMonster}/>
      </div>
    );
  }

}

export default App;
