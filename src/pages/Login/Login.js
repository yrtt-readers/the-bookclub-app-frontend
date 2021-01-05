import React, {useState} from 'react';
import { Link } from "react-router-dom";
//import PropTypes from 'prop-types';
import './Login.css';

function Login() {
    const [state , setState] = useState({
        email : "",
        password : "",
        successMessage: null
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        // const payload={
        //     "email":state.email,
        //     "password":state.password,
        // }
        // axios.post(API_BASE_URL+'login', payload)
        //     .then(function (response) {
        //         if(response.data.code === 200){
        //             setState(prevState => ({
        //                 ...prevState,
        //                 'successMessage' : 'Login successful. Redirecting to home page..'
        //             }))
        //             redirectToHome();
        //             props.showError(null)
        //         }
        //         else if(response.data.code === 204){
        //             props.showError("Username and password do not match");
        //         }
        //         else{
        //             props.showError("Username does not exists");
        //         }
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }
    // const redirectToHome = () => {
    //     props.updateTitle('Home')
    //     props.history.push('/');
    // }
    // const redirectToRegister = () => {
    //     //props.history.push('/signup'); 
    //     // props.updateTitle('Sign up');
        
    // }
    return(
        <div className="container container-margin text-center">
            <h1 className="text-center">Log in</h1>
            <div className="card col-12 login-card hv-center">
                <form>
                    <div className="form-group text-left">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" 
                        className="form-control" 
                        id="email" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email" 
                        value={state.email}
                        onChange={handleChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange} 
                    />
                    </div>
                    <div className="form-check">
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        onClick={handleSubmitClick}
                    >Submit</button>
                </form>
                <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                    {state.successMessage}
                </div>
                <div className="registerMessage">
                    <span>Don't have an account? </span>
                    <Link className='loginText' to="/signup">Sign up</Link>
                    
                    {/* <span className="loginText" onClick={() => redirectToRegister()}>Sign up</span>  */}
                </div>
            </div>
        </div>
    )
}

export default Login;