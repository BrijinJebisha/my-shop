import './About.css';
import { useState,useEffect } from "react";


const About = () => {

  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
 
  const increment = () =>
  {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0)
    {
        setCount(prevCount => prevCount - 1);
    }
    
  };

  useEffect(() => {
    if(count === 0)
    {
        setMessage(`Count changed:${count}`);
    }
    else{
      setMessage("");
    }
    
  },[count])
  
  return (
    <div className="container">
      <h1>Counter</h1>
      <div>
          <h4>
            count = {count}
            <p>{message}</p>
          </h4>
          <div >
              <button className="greenbtn" onClick = {increment} >Increase</button>
              <button className="redbtn" onClick={decrement}>decrease</button>
          </div>
          
      </div>
    </div>
  );
};

export default About;