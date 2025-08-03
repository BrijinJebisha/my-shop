import { useEffect, useState } from "react";
import "./card.css";
export default function Card({name})
{
    const[data, setData] = useState([]);
    
    useEffect(() => {
        const fetchdata = () => {
        fetch('http://localhost:5057/api/Employee')
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => {console.error('Error:', error);
        setData([]);
      });
    };
    
        fetchdata();

        const interval = setInterval(fetchdata, 15000);

        return () => clearInterval(interval);
    }
    , []);
    
    return(
         <div className="card-container">
            {data.length > 0 ? data.map(user =>
                (<div className="card-div">
                <div className="flip-box-front">
                    <img src="/profileicon.png" alt="icon" className="profile" />
                    <p>Name : {user.employeeName}</p><br/>
                    <p>Name : {name}</p><br/>
                    <p>Email :{user.emailId}</p><br/>
                    <p>Ph.no : {user.phoneNumber}</p>
                </div>
                <div className="flip-box-back">
                    <div className="Desc">Description:</div>
                    <div className="content">
                        <p>{user.position}</p>
                    </div>
                
                </div>
            </div>
           )): (
                <p>No data to display</p>)}
         </div>
            
    );
}