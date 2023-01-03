import React from 'react';



const Signin = ({ onRouteChange }) => {

    return (

       
        <div className=" pa4 black-80 ">
            <form className=" items-center  measure center shadow-5 pa4 br3">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 tc fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="tc db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address"/>
                        </div>
                        <div className="mv3">
                            <label className="tc db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password"/>
                        </div>
                       
                    </fieldset>
                    <div className="tc">
                    <input 
                        onClick={onRouteChange}
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
                    </div>
                    <div className="lh-copy mt3">
                        <a href="#0" className="tc f6 link dim black db">Register</a>
                        
                    </div>
                </form>
            </div>

       

    )
}
export default Signin;