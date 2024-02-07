import {useState, useEffect} from "react";
import '../styles/login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

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
          <button>Register</button>
          <a href="/#">Forgot Password?</a>
        </form>
        </>
    )
}

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
  
    const none = (e) => {
      e.preventDefault(); 
      console.log(name);
    }
  
    return (
      <>
      <form className="logcontainer">
        <h1>Register to get started <br></br>or<br></br> Use an email</h1>
        <label htmlFor="name">Name:</label>
        <input type="text" placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}/>
        <label htmlFor="name">Email:</label>
        <input type="text" placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}/>
        <label htmlFor="name">Password:</label>
        <input type="text" placeholder="Enter password "
        onChange={(e) => setPass(e.target.value)}/>
        <button onClick={none} >Submit</button>
        <h3>Register using Gmail Account</h3>
  
        <button className="placement">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faGoogle} size="2xl"/>
            <label htmlFor="login_google">Login using Google</label>
          </div>
        </button>
        
      </form>
      </>
    )
}

export {Login, Register}