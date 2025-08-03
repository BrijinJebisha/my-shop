import React, { useEffect, useState } from 'react';
import Timer from './Countdown';
import { Link } from 'react-router-dom';

const DataTable = () => {
  const [data, setData] = useState([]);

  const handleDelete = (employeeId) =>{
    
    
    fetch(`http://localhost:5057/api/Employee/${employeeId}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.ok) {
          // Remove from UI
          setData((prev) => prev.filter((emp) => emp.employeeId !== employeeId));
        } else {
          console.error('Delete failed');
        }
      })
      .catch((err) => console.error(err));
  };

  // Fetch data on component mount
  useEffect( () => {
    //fetch('https://jsonplaceholder.typicode.com/users') // example API
    const fetchdata = () => {
      fetch('http://localhost:5057/api/Employee')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {console.error('Error:', error);
        setData([]);
      });
    };

    fetchdata();

    const interval = setInterval(fetchdata, 10000);

    return () => clearInterval(interval);
    
  }, []);

  return (
    <div className='container'>
      <h2>User Table</h2>
      <Timer seconds={10}/>
      {data.length === 0 ? (
        <p style={{ textAlign: 'center', color: 'gray' }}>Nothing to show</p>
      ) : (
      <table style={{ width: '50%', borderCollapse: 'collapse' }} border="1" cellPadding="10">
        <thead className='head'>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {data.map(user => (
            <tr key={user.employeeId}>
              <td>{user.employeeId}</td>
              <td>{user.employeeName}</td>
              <td>{user.emailId}</td>
              <td>Rs.{user.salary}</td>
              <td><Link to='#' onClick={() => handleDelete(user.employeeId)}>Delete</Link></td>
            </tr>
          ))}
        </tbody>
      </table>)}
      </div> 
  );
};

export default DataTable;
