import React, { useState } from "react";
import { FaPhoneAlt,FaAddressBook,FaCity,FaSearchLocation,FaSignature,FaUserGraduate,FaFileSignature,FaUserTie,FaDatabase} from "react-icons/fa";

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
  const [showBtn, setShowBtn] = useState("Show");
  const [click, setClick] = useState(false);
  let userDetails = new Array([]);
  const [displayStoredData, setDisplayStoredData] = useState(false);

  let localStorageContent = localStorage.getItem("userDetails");
  if (localStorageContent === null) {
    userDetails = [];
  } else {
    userDetails = JSON.parse(localStorageContent);
  }
  function showDetails() {
    if (showBtn === "Show") {
      if (userDetails.length === 0) {
        alert("Please fill the data first to see.");
      } else {
        setDisplayStoredData(true);
        setShowBtn("Hide");
      }
    } else {
      setDisplayStoredData(false);
      setShowBtn("Show");
    }
  }
  function storageMediumSelection(e) {
    e.preventDefault();
    if (storageMedium === "localstorage") {
      setClick(true);
      saveDataLocal();
    } else {
      saveDataFirebase();
    }
  }
  function saveDataFirebase() {
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
      alert("Successful Firebase!!!");
      setFirstName("");
      setLastName("");
      setUniversityName("");
      setPhone("");
      setCityName("");
      setStorageMedium("");
      setZipCode("");
    }
  }
  function saveDataLocal(e) {
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
      userDetails.push({
        FirstName: firstName,
        LastName: lastName,
        UniversityName: universityName,
        CityName: cityName,
        ZipCode: zipCode,
        Phone: phone,
      });
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
      setFirstName("");
      setLastName("");
      setUniversityName("");
      setPhone("");
      setCityName("");
      setStorageMedium("");
      setZipCode("");
    }
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
    } else if (formFields["firstName"].length < 3) {
      isValid = false;
      errors["firstName"] = "Firstname should've atleast 3 char.";
    } else if (/^[0-9]/.test(formFields["firstName"])) {
      isValid = false;
      errors["firstName"] = "Can't start with digits.";
    }
    if (formFields["lastName"].length === 0) {
      isValid = false;
      errors["lastName"] = "Lastname can't be empty.";
    } else if (/^[0-9]/.test(formFields["lastName"])) {
      isValid = false;
      errors["lastName"] = "Can't start with digits.";
    }
    if (formFields["universityName"].length === 0) {
      isValid = false;
      errors["universityName"] = "Fill University name.";
    } else if (/\d/.test(formFields["universityName"])) {
      isValid = false;
      errors["universityName"] = "Can't have digits.";
    }
    if (formFields["cityName"].length === 0) {
      isValid = false;
      errors["cityName"] = "Fill city name.";
    } else if (/\d/.test(formFields["cityName"])) {
      isValid = false;
      errors["cityName"] = "Can't have digits.";
    }
    if (formFields["zipCode"].length === 0) {
      isValid = false;
      errors["zipCode"] = "Fill zip code.";
    } else if (/^\d{6}$/.test(formFields["zipCode"]) === false) {
      isValid = false;
      errors["zipCode"] = "Invalid zip code.";
    }
    if (formFields["phone"].length === 0) {
      isValid = false;
      errors["phone"] = "Fill phone number.";
    } else if (/^\d{10}$/.test(formFields["phone"]) === false) {
      isValid = false;
      errors["phone"] = "Invalid contact number.";
    }
    if (formFields["storageMedium"].length === 0) {
      isValid = false;
      errors["storageMedium"] = "Select appropriate storage medium.";
    }
    setErrors(errors);
    return isValid;
  }

  return (
    <>
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
          <div className="toggleButtonContainer">
            {click ? (
              <button
                className="getStartedBtn"
                id="showBtn"
                onClick={() => {
                  showDetails();
                }}
              >
                {showBtn}
              </button>
            ) : null}
          </div>
        </header>
        <section className="banner">
          <div className="layer"></div>
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
            <p className="heading">Contact Us</p>
          </div>
          <div className="informationBox">
            <div className="informationBox1"></div>
            <div className="informationBox2">
              <form action="">
                <label htmlFor=""><FaUserTie className="icon"></FaUserTie>Personal Details</label>
                <div className="elementContainer">
                  <div className="element">
                    <div className="labelContainer">
                      <p><FaSignature className="icon"></FaSignature>First name</p>
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
                      <p><FaFileSignature className="icon"></FaFileSignature>Last name</p>
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
                      <p><FaUserGraduate className="icon"></FaUserGraduate>University's Name</p>
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
                      <p><FaCity className="icon"></FaCity>City</p>
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

                <label style={{ marginTop: "10px" }}><FaAddressBook className="icon"></FaAddressBook>Address Details</label>
                <div className="elementContainer">
                  <div className="element">
                    <div className="labelContainer">
                      <p><FaSearchLocation className="icon"></FaSearchLocation>Zip Code</p>
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
                      <p><FaPhoneAlt style={{marginRight:"10px"}}></FaPhoneAlt>Phone</p>
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
                    <p><FaDatabase className="icon"></FaDatabase>Storage Medium</p>
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
                      <option value="localstorage">Local Storage</option>
                      <option value="firebase">Firebase</option>
                    </select>
                    <p className="error">{errors["storageMedium"]}</p>
                  </div>
                  <button
                    className="submitBtn"
                    onClick={(e) => storageMediumSelection(e)}
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      {displayStoredData ? (
        <div className="storedData">
          <div className="titleContainer">
            <p>User Information</p>
          </div>
          <div
            className="localDataContainer"
            style={{ backgroundColor: "maroon", color: "white" }}
          >
            <p>Name</p>
            <p>University</p>
            <p>Mobile</p>
          </div>
          {userDetails
            ? userDetails.map((user, index) => (
                <div className="localDataContainer" key={index}>
                  <p>{user.FirstName + " " + user.LastName}</p>
                  <p>{user.UniversityName}</p>
                  <p>{user.Phone}</p>
                </div>
              ))
            : setDisplayStoredData(false)}
        </div>
      ) : null}
    </>
  );
};

export default App;
