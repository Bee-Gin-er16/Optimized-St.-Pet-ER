import {useState, useEffect} from "react";

const Login = () => {
    const [Email, setEmail] = useState('');
    const [Pass, setPass] = useState('');

    const out = (e) => {
        e.preventDefault();
        console.log(`Onclicking, We obtained that your email is ${Email} and password is ${Pass} during input`);
    }

    return (
        <>
        <form>
            <input type="email" value={Email} 
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" value={Pass}
            placeholder="Your Password"
            onChange={(e) => setPass(e.target.value)}/>
            <button onClick={out}>Submit Credentials</button>
        </form>
        </>
    )
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

export {Login, Counter}