import { useState } from "react";
import "./Register.css";
import Loading from "./loading";
import Failed from "./Cross";
import SuccessTick from "./SuccessTick";
import { useNavigate } from "react-router-dom";
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';

export default function Register() {

  const navigate = useNavigate();

  const [showTick, setShowTick] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showCross, setShowCross] = useState(false);
  // const [phone, setPhone] = useState('');

  const handlePassword = (event) => {
    const confirmPassword = event.target.value;
    if (confirmPassword !== password) {
      setMessage("check password");
    } else {
      setMessage("");
    }
  };

  const handleClear = () => {
    document.getElementById("registerForm").reset();
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setShowTick(false);
    setShowCross(false);

    const formData = new FormData(event.target);
    const EmployeeName = formData.get("username");
    const EmailId = formData.get("email");
    const Salary = formData.get("dob");
    const phonenumber = formData.get("phonenumber");
    const password = formData.get("password");
    const Position = formData.get("lastname");

    const payload = { EmployeeName, EmailId, Salary, phonenumber, password, Position };
    console.log(payload);

    try {
      const response = await fetch("http://localhost:5057/api/Employee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log("Response:", response);
      console.log("Result:", result);

      if (response.ok) {
        setShowCross(false);
        await sleep(2000);
        setShowTick(true);
        await sleep(3000);
        setShowTick(false);
        navigate('/');
      } else {
        throw new Error("Server responded with an error");
      }
    } 
    catch (error) {
      console.error("Error:", error);
      setLoading(false);
      setShowCross(true);
      await sleep(3000);
      setShowCross(false);
    } 
    finally {
      setLoading(false);
      setShowCross(false);
    }
  };

  return (
    <div className="form-container">
      {showCross && <Failed />}
      {loading && <Loading />}
      {showTick && <SuccessTick />}
      {!showCross && !loading && !showTick && (
        <form id="registerForm" onSubmit={handleSubmit}>
          <div className="form-content">
            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Register</h1>

            <div className="form-row">
              <label>First Name : </label>
              <input name="username" placeholder="Enter your First name here..." required />
            </div>

            <div className="form-row">
              <label>Last Name : </label>
              <input name="lastname" placeholder="Enter your Last name here..." />
            </div>

            <div className="form-row">
              <label>Date of Birth : </label>
              <input type="date" name="dob" placeholder="Enter your DOB here..." />
            </div>

            <div className="form-row">
              <label>Phone Number : </label>
              <input name="phonenumber" type="tel" placeholder="Enter your Phone Number here..." />
              {/* <PhoneInput
                name="phonenumber"
                country={'in'}           // Default country: India
                value={phone}
                onChange={setPhone}
                enableSearch={true}      // To search country
                /> */}
            </div>

            <div className="form-row">
              <label>Email ID : </label>
              <input name="email" type="email" placeholder="Enter your Email Id here..." required />
            </div>

            <div className="form-row">
              <label>Enter Password : </label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your Password here..."
              />
            </div>

            {message && <p style={{ color: "red", textAlign: "right" }}>{message}</p>}

            <div className="form-row">
              <label>Confirm Password : </label>
              <input
                name="password"
                type="password"
                onChange={handlePassword}
                placeholder="Enter your Confirm Password here..."
              />
            </div>

            <div className="form-buttons">
              <button type="button" onClick={handleClear} style={{ background: "red" }}>
                Clear
              </button>
              <button type="submit" style={{ background: "green" }}>
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
