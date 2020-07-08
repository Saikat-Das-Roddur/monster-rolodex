import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './component/card-list/card-list.coponent';

class App extends Component {
  constructor(){
    super();
    this.state = {monsters:[1,2,3,4,5,6,7,8,9,10]}
  }

  

  render(){
    const  monsterList = this.state.monsters.map(monster => <h1>{monster}</h1>)
    return (
      <div className="App">
      <CardList monster = {monsterList}  />
      </div>
    );
  }

}

export default App;
