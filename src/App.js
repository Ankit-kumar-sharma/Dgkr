import React from "react";
import "./App.css";
const App = () => {
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
                  <input type="text" />
                  <p className="error"></p>
                </div>
                <div className="element">
                  <div className="labelContainer">
                    <p>Last name</p>
                  </div>
                  <input type="text" />
                  <p className="error"></p>
                </div>
              </div>

              <div className="elementContainer">
                <div className="element">
                  <div className="labelContainer">
                    <p>Field 3</p>
                  </div>
                  <input type="text" />
                  <p className="error"></p>
                </div>
                <div className="element">
                  <div className="labelContainer">
                    <p>Field 4</p>
                  </div>
                  <input type="text" />
                  <p className="error"></p>
                </div>
              </div>

              <label style={{ marginTop: "60px" }}>Account Details</label>
              <div className="elementContainer">
                <div className="element">
                  <div className="labelContainer">
                    <p>Field 5</p>
                  </div>
                  <input type="text" />
                  <p className="error"></p>
                </div>
                <div className="element">
                  <div className="labelContainer">
                    <p>Field 6</p>
                  </div>
                  <input type="text" />
                  <p className="error"></p>
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
                <div className="labelContainer" style={{ marginTop: "40px" }}>
                  <p>Storage Medium</p>
                </div>
                <div className="element">
                  <select name="" id="" className="select">
                    <option value="none" disabled>
                      --Select
                    </option>
                    <option value="localhost">Localhost</option>
                    <option value="firebase">Firebase</option>
                  </select>
                  <p className="error"></p>
                </div>
                <button className="submitBtn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
