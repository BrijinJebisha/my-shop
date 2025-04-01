import "./welcome.css";
import { useState } from "react";


// const buttonStyle = {
//     backgroundColor: "blueviolet",
//     color: "white",
//     padding: "10px 20px",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     fontSize: "16px",
//     boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.3)", // Shadow effect
//   };

function Welcome()
{
    return(
    <div className="nav">
        <Button/>
    </div>
    );
}
export default Welcome;

export function Button() 
{
    const [message, setMessage] = useState("");
    const [count, setCount] = useState(1);
    const handleClick = () =>{
        setCount(prevCount =>{
                prevCount = prevCount + 1;
                setMessage(`Clicked ${count} times`);
                return prevCount;
        }  )
        
    }

    return(
    <div >
        <button className="buttonStyle" onClick={handleClick}>click me</button>
        {message && <p>{message}</p>}
    </div>
    );
}


  
  