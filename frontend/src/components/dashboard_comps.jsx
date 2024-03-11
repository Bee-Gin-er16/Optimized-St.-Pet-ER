import {useState, useEffect} from "react";
import '../styles/dash_elems.css';
import Logo from '../img/Logo.png';
import default_profile from "../img/pet_and_owner.jpg";

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
      {(props.isNotLoggedIn)? <h2 style={{color: "red"}}>You are not authorized to access this without logging in</h2>:
      <h2 style={{color: "green"}}>Welcome user</h2>}
    </div>
    </>
  );
}

const Profile = () => {
  return (
    <>
    <div className="profile_contents">

      <div className="user_profile">
        <div className="profile_bg">
          <div className="profile_img">
            <img src={default_profile} alt="user_profile_picture"/> 
          </div>
          <div className="profile_creds">
            <h1>ADAM BLACK</h1>
            <h2>Address:</h2>
            <h2>Status:</h2>
            <h2>Gender:</h2>
          </div>
        </div>
      </div>

      <div className="pet_profile">
        <h1>This is pet profile</h1>
      </div>
    </div>
    </>
  );
}

export {Counter, Header, Home, Profile}