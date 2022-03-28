import React, { Component } from 'react'

export default class EventHandling extends Component {
    constructor(props){
        super(props);
        this.submit.bind(this);
    }
    submit = (event) =>{
        //alert('submit');
        console.log(event)
    }
    render() {
        return (
        <div>
            <button onClick={(e)=>this.submit(e)}>click here</button>
        </div>
        )
    }
}
