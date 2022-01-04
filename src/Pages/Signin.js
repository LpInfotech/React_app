import React, { Component } from 'react'

export default class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '',name:'test98@gmail.com',password:123456};     
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
     
      handleSubmit(event) {
        event.preventDefault();
        let userName = event.target.username.value;
        let password = event.target.password.value;
        console.log(`Username is ${userName} and password is ${password}`);
 
      }

    render() {
        return (
            <div className="container">
            <div className="row justify-content-center align-items-center vh-100">
                <div id="login-column" className="col-md-4 card mx-auto border-0 shadow-lg">
                    <div id="login-box" className="col-md-12 card-body">
                        <form id="login-form" className="form" onSubmit={this.handleSubmit}>
                            <h2 className="text-center text-primary">Sign In</h2>
                            <div className="form-group mb-2">
                                <label htmlFor="username" className="text-primary">Username:</label><br/>
                                <input type="text" name="username" id="username" className="form-control" value={this.state.name} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="password" className="text-primary">Password:</label><br/>
                                <input type="password" value={this.state.password} name="password" id="password" className="form-control" onChange={this.handleChange} />
                            </div>
                                <input value="Sign In" type="submit" className="btn btn-primary btn-md w-100 text-white"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
