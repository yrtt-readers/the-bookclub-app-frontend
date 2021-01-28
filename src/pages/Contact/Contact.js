import React, {useState} from 'react';
import './Contact.css';

function Contact() {
    const [state , setState] = useState({
        name : "",
        email : "",
        message : "",
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
    }
    return (
        <div className="container container-margin text-center">
            <h1 className="text-center">Contact us</h1>
            <div className="card col-12 login-card hv-center">
                <form>
                    <div className="form-group text-left">
                        <label htmlFor="exampleInputName1">Name</label>
                        <input type="text" 
                            className="form-control" 
                            id="name" 
                            aria-describedby="nameHelp" 
                            placeholder="Enter name" 
                            value={state.name}
                            onChange={handleChange}
                        />
                    </div>
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
                        <label htmlFor="exampleInputMessage">Message</label>
                        <textarea id="message" 
                            className="form-control" 
                            rows="4" 
                            cols="50" 
                            value={state.message}
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="form-check">
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        onClick={handleSubmitClick}
                    >Send message</button>
                </form>
                <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                    {state.successMessage}
                </div>
            </div>
        </div>
    );
  }
  
  export default Contact;