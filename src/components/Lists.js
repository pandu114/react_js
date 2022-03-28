import React, { Component } from 'react'

export default class Lists extends Component {
  constructor(props){
      super(props);
      this.state = {
          users:[{
              id:1,
            name:"suresh",
          },
          {
              id:2,
            name:"mamatha",
          }]
      }
  }
  render() {
    return (
      <div>
          <h1>
              {this.state.users.map(user=>(
                  <p key={user.id}>{user.name}</p>
              ))}
          </h1>
      </div>
    )
  }
}
