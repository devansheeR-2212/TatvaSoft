import React, {Component} from "react";
import './LoginForm.css';

class LoginForm extends Component{

    constructor(){
        super()
        this.state={
            username: "",
            email:"",
            pw:"",
        }

    }

    handleUsername= (event) =>
    {
        console.log(event.target.value)
        this.setState({
            username:event.target.value
        })
    }


    handleEmail= (event) =>
    {
    
        this.setState(
            {
                email:event.target.value
            }
        )
    }

    handlePassword=(event)=>
    {
        this.setState(
            {
                pw:event.target.value
            }
        )
    }

    handleSubmit = event => {
        console.log(this.state.email)
        event.preventDefault()
        alert(`${this.state.username} ${this.state.email} ${this.state.pw}`)
    }
    render(){
        return(
            <form className="form1" onSubmit={this.handleSubmit}>
                <div className="username">
                <label className="flabel" >Username: </label>
                <input type="text"  onChange={this.handleUsername}></input>
                </div>

                <div className="email">
                <label className="flabel" >E-mail: </label>
                <input type="email" onChange={this.handleEmail}></input>
                </div>


                <div className="pass">
                <label className="flabel" value={this.state.pw} onChange={this.handlePassword}>Password: </label>
                <input type="Password"></input>
                </div>

                <div>
                <button className="clickme"onClick={this.handleSubmit}>Submit</button>
                </div>

            </form>
        )
    }
}
export default LoginForm