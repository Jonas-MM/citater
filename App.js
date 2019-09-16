import React, { Component } from 'react';
import Citater from './components/Citater'
import AddCitat from './components/AddCitat'


class App extends Component {
  state = {
    citater : [
      { id:1, content:'The only mystery in life is why the kamikaze pilots wore helmets.', navn: '– Abraham Lincoln,', alder:2001 },
      { id:2, content:'Men marry women with the hope they will never change. Women marry men with the hope they will change. Invariably they are both disappointed.', navn: '– Albert Einstein,', alder:1946 },
      { id:3, content:'The difference between stupidity and genius is that genius has its limits.”', navn: '– Albert Einstein,', alder:1936 },
      { id:4, content:'The average dog is a nicer person than the average person.', navn: '– Andy Rooney,', alder:1999 },
      { id:5, content:'My opinions may have changed, but not the fact that I’m right.', navn: '– Ashleigh Brilliant,', alder:1996 }
      
    ]
  }

  deleteCitat = (id) => {
    let citater = this.state.citater.filter(citat =>{
      return citat.id !== id 
    });
    this.setState({
      citater: citater
    })
  }

  addCitat = (citat) => {
    console.log("dsadsa");
    citat.id = Math.random()
    let citater = [...this.state.citater, citat];
    console.log(citater);
    this.setState({
      citater: citater
    })
  }
  render() {
    return (
      <div className="citat-app container">
        {/* <h1>My first react app</h1>
        <p> welcome </p> */}
        <h1 className="center blue-text">Citater</h1>
        <Citater citater={this.state.citater} deleteCitat={this.deleteCitat} />
        <AddCitat addCitat={this.addCitat} />
        <button deleteCitat={this.deleteCitat } className="center btn">Submit</button>

      </div>
    );
  }
}

export default App;
