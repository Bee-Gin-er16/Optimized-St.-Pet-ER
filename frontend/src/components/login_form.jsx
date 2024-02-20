import {useState, useEffect} from "react";
import '../styles/login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom"

const Login = () => {
    const [Email, setEmail] = useState('');
    const [Pass, setPass] = useState('');

    const out = (e) => {
        e.preventDefault();
        let emptyFields = []
        if(!Email){
          emptyFields.push('Email')
        }
        if(!Pass){
          emptyFields.push('Pass')
        }
        if(emptyFields.length > 0){
          console.log('Please fill in all the fields', emptyFields);
        } else {
          console.log(`Onclicking, We obtained that your email is ${Email} and password is ${Pass} during input`);
        }
    }

    return (
        <>
        <form className="logcontainer">
          <h1>Sign in to get started</h1>
          <label htmlFor="Email">Email:</label>
          <input type="email" value={Email} 
          placeholder="Your Email" className="logemail"
          onChange={(e) => setEmail(e.target.value)}/>
          <label htmlFor="Pass">Password:</label>
          <input type="password" value={Pass}
          placeholder="Your Password" className="logpass"
          onChange={(e) => setPass(e.target.value)}/>

          <input type="submit" value="Login" onClick={out}></input>
          {/* <Link to="/registration_form">
          </Link> */}
          <button>Register</button>
          <a href="/#">Forgot Password?</a>
        </form>
        </>
    )
}

export default Login