import { useState } from "react";

const Intro = () => {
    const [name, setName] = useState("Ihechikara");
    const changeName = () => {
        setName("Chikara");
    };

    return (
        <div>
        <p>My name is {name}</p>
        <button onClick={changeName}> Click me </button>
        </div>
    );
    // return (
    //     <div className="Intro">
    //         <h1>This is the intro page</h1>
    //     </div>
    // )
}

export default Intro