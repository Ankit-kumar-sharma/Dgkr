import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [universityName, setUniversityName] = useState("");
  const [cityName, setCityName] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phone, setPhone] = useState("");
  const [storageMedium, setStorageMedium] = useState("");
  const [errors, setErrors] = useState("");
  // const [status, setStatus] = useState(false);
  function saveDataLocal(e) {
    e.preventDefault();
    if (
      checkValidation(
        firstName,
        lastName,
        universityName,
        cityName,
        zipCode,
        phone,
        storageMedium
      )
    ) {
      alert("Successful!!!");
    }
    // console.log(name);
  }
  function checkValidation(
    firstName,
    lastName,
    universityName,
    cityName,
    zipCode,
    phone,
    storageMedium
  ) {
    let formFields = {
      firstName,
      lastName,
      universityName,
      cityName,
      zipCode,
      phone,
      storageMedium,
    };
    let errors = {};
    let isValid = true;
    if (formFields["firstName"].length === 0) {
      isValid = false;
      errors["firstName"] = "Firstname can't be empty.";
    } else if (formFields["firstName"].length < 5) {
      isValid = false;
      errors["firstName"] = "Firstname should've atleast 5 char.";
    }
    if (formFields["lastName"].length === 0) {
      isValid = false;
      errors["lastName"] = "Lastname can't be empty.";
    }
    if (formFields["universityName"].length == 0) {
      isValid = false;
      errors["universityName"] = "Fill University name.";
    }
    if (formFields["cityName"].length == 0) {
      isValid = false;
      errors["cityName"] = "Fill city name.";
    }
    if (formFields["zipCode"].length == 0) {
      isValid = false;
      errors["zipCode"] = "Fill zip code.";
    }
    if (formFields["phone"].length == 0) {
      isValid = false;
      errors["phone"] = "Fill phone number.";
    }
    if (formFields["storageMedium"].length == 0) {
      isValid = false;
      errors["storageMedium"] = "Select appropriate storage medium.";
    }
    setErrors(errors);
    return isValid;
  }
  return (
    <main>
      <header>
        <div className="container">
          <img
            src={require("./Images/logo.png")}
            alt="logo of website"
            className="logo"
          />
          <p className="logoTitle">
            Data<span style={{ color: "#bfbfbf" }}>Grokr</span>
          </p>
        </div>
        <button className="getStartedBtn">Get Started</button>
      </header>
      <section className="banner">
        <q className="Message"> Be the best version of yourself.</q>
        <a href="#informationContainerID">Join Us</a>
        <div className="mouse_scroll">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div>
            <span className="m_scroll_arrows unu"></span>
            <span className="m_scroll_arrows doi"></span>
            <span className="m_scroll_arrows trei"></span>
          </div>
        </div>
      </section>
      <div className="informationContainer" id="informationContainerID">
        <div className="titleContainer">
          <p>Have Some Questions?</p>
        </div>
        <div className="informationBox">
          <div className="informationBox1"></div>
          <div className="informationBox2">
            <form action="">
              <label htmlFor="">Personal Details</label>
              <div className="elementContainer">
                <div className="element">
                  <div className="labelContainer">
                    <p>First name</p>
                  </div>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                  <p className="error">{errors["firstName"]}</p>
                </div>
                <div className="element">
                  <div className="labelContainer">
                    <p>Last name</p>
                  </div>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                  <p className="error">{errors["lastName"]}</p>
                </div>
              </div>

              <div className="elementContainer">
                <div className="element">
                  <div className="labelContainer">
                    <p>University's Name</p>
                  </div>
                  <input
                    type="text"
                    value={universityName}
                    onChange={(e) => {
                      setUniversityName(e.target.value);
                    }}
                  />
                  <p className="error">{errors["universityName"]}</p>
                </div>
                <div className="element">
                  <div className="labelContainer">
                    <p>City</p>
                  </div>
                  <input
                    type="text"
                    value={cityName}
                    onChange={(e) => {
                      setCityName(e.target.value);
                    }}
                  />
                  <p className="error">{errors["cityName"]}</p>
                </div>
              </div>

              <label style={{ marginTop: "10px" }}>Account Details</label>
              <div className="elementContainer">
                <div className="element">
                  <div className="labelContainer">
                    <p>Zip Code</p>
                  </div>
                  <input
                    type="text"
                    value={zipCode}
                    onChange={(e) => {
                      setZipCode(e.target.value);
                    }}
                  />
                  <p className="error">{errors["zipCode"]}</p>
                </div>
                <div className="element">
                  <div className="labelContainer">
                    <p>Phone</p>
                  </div>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                  <p className="error">{errors["phone"]}</p>
                </div>
              </div>

              <div
                className="elementContainer"
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="labelContainer" style={{ marginTop: "20px" }}>
                  <p>Storage Medium</p>
                </div>
                <div className="element">
                  <select
                    name=""
                    id=""
                    value={storageMedium}
                    className="select"
                    onChange={(e) => {
                      setStorageMedium(e.target.value);
                    }}
                  >
                    <option value={""} disabled>
                      --Select
                    </option>
                    <option value="localhost">Localhost</option>
                    <option value="firebase">Firebase</option>
                  </select>
                  <p className="error">{errors["storageMedium"]}</p>
                </div>
                <button className="submitBtn" onClick={(e) => saveDataLocal(e)}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
