import React, { Component } from 'react'

export default class Forms extends Component {
    constructor(props){
        super(props);
        this.state= {
            username:'',
            password:''
        }
    }

    login=(e)=>{
        e.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(result=>{ console.log(result)
            if(result.filter(user=>user.username===this.state.username).length>0){
                alert('login successfully')
            }else{
                alert('wrong username and password');
            }
        }
        
        )
        // console.log('hello ');
        // if(this.state.username==='suresh' && this.state.password==='suresh'){
        //     alert('logi successfully')
        // }else{
        //     alert('wrong username and password');
        // }
    }
    onChangeUsername(e){
        this.setState({username:e})
    }
    onChangePassword(e){
        this.setState({password:e})
    }
    render() {
        return (
        <div style={{textAlign:'center'}}>
            <form onSubmit={(e)=>this.login(e)}>
                <input type='text' value={this.state.username} onChange={(e)=>this.onChangeUsername(e.target.value)} placeholder='username'/>
                <br/>
                <input type='password' value={this.state.password} onChange={(e)=>this.onChangePassword(e.target.value)} placeholder='password'/>
                <br/>
                <input type='submit' value='login'/>
            </form>
        </div>
        )
    }
}
