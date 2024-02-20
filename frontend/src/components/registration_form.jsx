import {useState, useEffect} from "react";
import '../styles/login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

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
        <h2>Registration </h2>
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

export {Register}