import React, {useState} from 'react';
import './Signup.css';

function Signup() {
    const [state , setState] = useState({
        email : "",
        password : ""
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
        if(state.password === state.confirmPassword) {
            //sendDetailsToServer()    
            //props.showError('Password good!');
            console.log('Passwords are good!');
        } else {
            console.log('Passwords do not match');
            //props.showError('Passwords do not match');
        }
    }
    return(
        <div className="container container-margin text-center">
            <h1 className="text-center">Register new account</h1>
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
                       onChange={handleChange}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange} />
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="exampleInputPassword1">Confirm Password</label>
                        <input type="password" 
                            className="form-control" 
                            id="confirmPassword" 
                            placeholder="Confirm Password"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-primary" onClick={handleSubmitClick}>
                        Register
                    </button>
                </form>
            </div>
        </div>
        );
}

export default Signup;