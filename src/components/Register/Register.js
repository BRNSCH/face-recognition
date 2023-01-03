import React from 'react';



const Register = ({ onRouteChange }) => {

    return (


        <div className=" pa4 black-80 ">
            <div className=" items-center  measure center shadow-5 pa4 br3">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 tc fw6 ph0 mh0">Register</legend>
                    <div className="mt3">
                        <label className="tc db fw6 lh-copy f6" htmlFor="name">Name</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="name" />
                    </div>
                    <div className="mt3">
                        <label className="tc db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                    </div>
                    <div className="mv3">
                        <label className="tc db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                    </div>

                </fieldset>
                <div className="tc">
                    <input
                        onClick={() => onRouteChange('signin')}
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib pointer"
                        type="submit"
                        value="Register" />
                </div>
                
            </div>
        </div>



    )
}
export default Register;