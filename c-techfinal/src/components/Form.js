// src/App.js

// import "./App.css";
import { useState } from "react";

function Form() {
    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    const [Country, setCountry] = useState("");
    const [StreetAddress, setAddress] = useState("");
    const [TownorCity, setCity] = useState("");
    const [StateorCounty, setState] = useState("");
    const [PostCodeorZip, setZip] = useState("");
    const [Phone, setPhone] = useState("");
    const [EmailAddress, setEmail] = useState("");
    const [message, setMessage] = useState("");
  

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:3001/api/checkout/create", {
        
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          fName: fName,
          lName: lName,
          Country: Country,
          StreetAddress: StreetAddress,
          TownorCity: TownorCity,
          StateorCounty: StateorCounty,
          PostCodeorZip: PostCodeorZip,
          Phone: Phone,
          EmailAddress: EmailAddress, 
        }),
      });
      let resJson = await res.json();
      if (!res.error) {
        setMessage("successfully sent");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form-data">
      <form onSubmit={handleSubmit}>
        <input className="form-input"
          type="text" required
          value={fName}
          placeholder="Name"
          onChange={(e) => setfName(e.target.value)}
        />
        <input className="form-input"
          type="text" required
          value={lName}
          placeholder="Email"
          onChange={(e) => setlName(e.target.value)}
        />
        <input className="form-input"
          type="text"
          value={Country}
          placeholder="country"
          onChange={(e) => setCountry(e.target.value)}
        />
         <input className="form-input"
          type="text"
          value={StreetAddress}
          placeholder="address"
          onChange={(e) => setAddress(e.target.value)}
        />
         <input className="form-input"
          type="text"
          value={TownorCity}
          placeholder="city"
          onChange={(e) => setCity(e.target.value)}
        />
         <input className="form-input"
          type="text"
          value={StateorCounty}
          placeholder="state"
          onChange={(e) => setState(e.target.value)}
        />
         <input className="form-input"
          type="text"
          value={PostCodeorZip}
          placeholder="zip"
          onChange={(e) => setZip(e.target.value)}
        />
         <input className="form-input"
          type="text"
          value={Phone}
          placeholder="phone"
          onChange={(e) => setPhone(e.target.value)}
        />
         <input className="form-input"
          type="text" required
          value={EmailAddress}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit" className="submit-btn">Let Us Contact You</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default Form;