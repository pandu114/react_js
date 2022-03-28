import React, { Component } from 'react'

export default class Mounting extends Component {
    // Mounting has the below order of execution 
    //step:1
    constructor(props){
        super(props);
        console.log('In constructor');
       this.state={

       }
    }
    //step:2
   static getDerivedStateFromProps(props, state){
        console.log('in getDerivedStateFromProps');
        return state;
    }
    //step:4
    componentDidMount(){
        console.log('in componentDidMount');
    }
//step:3
  render() {
      console.log('in render method');
    return (
      <div>Mounting</div>
    )
  }
}
