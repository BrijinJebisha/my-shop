import { useEffect, useState } from "react";

export default function Timer({seconds}){

    const [second, setSecond] = useState(seconds);

    useEffect(() => {
        if (second < 0)
        {
            setSecond(seconds)
        }
        const interval = setInterval(() => {
            setSecond(prevSec => prevSec -1)}, 1000
        );

        return () => clearInterval(interval);
    });

    return (
    <div>
      <h2>Countdown: {second} seconds</h2>
    </div>
  );
}