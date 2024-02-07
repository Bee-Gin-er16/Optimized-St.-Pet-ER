import {useState, useEffect} from "react";
import '../styles/dash_elems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
  return (
    <>
    <header>
      <h1>This is header for icon/hero icon</h1>
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

export {Counter, Header}