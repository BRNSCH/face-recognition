import React from 'react';



class SignIn extends React.Component  {

    // onRouteChange
    constructor(props) {
        super(props)
        this.state = {
             email: '',
             password: '',
             name:''
        }
    }
    onEmailChange = (event) => {
        this.setState({signInMail: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({ signInPassword: event.target.value });
    }

    onSubmitSignIn = () => {
        console.log(this.state)
        fetch('http://localhost:3001/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
               email: this.state.signInMail,
               password: this.state.signInPassword
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data === 'success') {
                    this.props.onRouteChange('home');
                }
            })

        
    }

    render() {
       
          return (

       
        <div className=" pa4 black-80 ">
            <div className=" items-center  measure center shadow-5 pa4 br3">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 tc fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="tc db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                              <input
                                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                  type="email"
                                  name="email-address"
                                  id="email-address"
                                  onChange={this.onEmailChange}
                              />
                        </div>
                        <div className="mv3">
                            <label className="tc db fw6 lh-copy f6" htmlFor="password">Password</label>
                              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                  type="password"
                                  name="password"
                                  id="password"
                                  onChange={this.onPasswordChange}
                              />
                        </div>
                       
                    </fieldset>
                    <div className="tc">
                    <input 
                        onClick={this.onSubmitSignIn}
                              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                              type="submit" value="Sign in" />
                    </div>
                    <div className="lh-copy mt3">
                        <p
                              onClick={this.onSubmitSignIn}
                        href="#0" className="tc f6 link dim black db pointer">Register</p>
                        
                    </div>
                </div>
            </div>
     
        )  
        
    }


}
export default SignIn;