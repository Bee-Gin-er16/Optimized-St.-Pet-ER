import {useState, useEffect} from "react";
import '../styles/dash_elems.css';
import Logo from '../img/Logo.png'

const Header = (props) => {
  return (
    <>
    <header>
      <img className="logo brand-logo-nav" src={Logo} alt="St. Pet-ER brand_logo"/>
      <nav>
        <span><img src="#" alt="icon-profile" /></span>
        <span>
            {(props.name.length === 0) ? `Welcome Guest` : `Welcome ${props.name} ` }
        </span>
        <hr />
        <ul>Home</ul>
        <ul>Profile</ul>
        <ul>History</ul>
        <ul>Schedule</ul>
      </nav>
    </header>
    </>
  );
}

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      console.log(`You have clicked the button ${count} times`)
    });
  
    return (
      <div>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    ); 
}

const Home = (props) => {
  return (
    <>
    <div className="homepage">
      <h1>This is home</h1>
      {(props.isLoggedIn)? <h2 style={{color: "green"}}>Welcome user</h2>: <h2 style={{color: "red"}}>You are not authorized to access this without logging in</h2>}
    </div>
    </>
  );
}
export {Counter, Header, Home}