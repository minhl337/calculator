import React from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './components/Display'
import Keys from "./components/Keys.js"
import Symbols from "./components/Symbols.js"
import keyData from "./data/data.js"
import 'semantic-ui-css/semantic.min.css'
import Contain from "./components/Container.js"
import { Divider, Grid, Image, Segment, Container } from 'semantic-ui-react'

class App extends React.Component{
  constructor(){ 
    super()
    this.state={
      displayKey:0,
      secondKey:0,
      firstKey:0,
      value:""
    }
  }

  onClick=(e)=>{
    if (e.target.innerText == "="){
      this.clickEquals()
    } else if (e.target.innerText == "Clr"){
      this.clickClr()
    } else {
    this.setState({
      
      value: this.state.value + e.target.innerText
    }, () => console.log(this.state.value))
    
  }}
  
  clickClr() {
    this.setState({
      value: ""
    })
  }
  
  clickEquals() {
   
    this.setState({
      value: eval(this.state.value)
    })
    
  }
  
  render(){
    return(
      <Container>
      <Segment>
    <Grid columns={2} relaxed='very'>
      <Grid.Column>
    
        
          <Display stateValue={this.state.value} />
           </Grid.Column>
      <Grid.Column>
          <Keys onClick={this.onClick} stateValue={this.state.value}/>
        

            </Grid.Column>
    </Grid>

    
  </Segment>
  </Container>
      );
  }
}

export default App;
