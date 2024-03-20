import {useState} from "react";
import log_styles from '../styles/login.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGoogle } from '@fortawesome/free-brands-svg-icons'
// import { Link } from "react-router-dom"

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
        <form className={log_styles.logcontainer}>
          <h1>Sign in to get started</h1>
          
          <label htmlFor="Email">Email:</label>
          <input type="email" placeholder="Example@gmail.com" className="logemail" onChange={(e) => setEmail(e.target.value)}/>

          <label htmlFor="Pass">Password:</label>
          <input type="password" placeholder="Enter your password" className="logpass" onChange={(e) => setPass(e.target.value)}/>

          <a href="/#">Forgot Password?</a>
          <input type="submit" value="Login" onClick={out}></input>
          {/* <Link to="/registration_form">
          </Link> */}
          <button>Register</button>
          
        </form>
        </>
    )
}

export {Login}