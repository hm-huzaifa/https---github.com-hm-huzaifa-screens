import React from "react";
import "../css/Register.css";
import plants from "../imgs/plants.png";
import plantsFliped from "../imgs/plantsFliped.png";
import head from "../imgs/head.png";
import { useState } from "react";

const Register = () => {
  const [frontCNIC, setFrontCNIC] = useState(null);
  const [backCNIC, setbackCNIC] = useState(null);

  return (
    <>
      <div className="container">
        <div className="inner-container">
          <div className="header">
            <div className="left-img">
              <img src={plantsFliped} alt="plants" />
            </div>
            <div className="center-img">
              <img src={head} alt="head" />
              <h4>BE ONE OF US!</h4>
            </div>
            <div className="right-img">
              <img src={plants} alt="plants" />
            </div>
          </div>

          <div className="inner-container">
            <div className="row">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="First Name"
              />
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Last Name"
              />
            </div>
            <div className="row">
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="CNIC Number"
              />{" "}
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Email"
              />
            </div>
            <div className="row">
              <input
                type="file"
                className="form-control CNIC-input-front"
                id="exampleFormControlInput1"
                onChange={(e) => {
                  setFrontCNIC(URL.createObjectURL(e.target.files[0]));
                }}
              />

              <input
                type="file"
                className="form-control CNIC-input-back"
                id="exampleFormControlInput1"
                onChange={(e) => {
                  setbackCNIC(URL.createObjectURL(e.target.files[0]));
                }}
              />
            </div>
            <div className="row">
              <div className="file-upload">
                {frontCNIC !== null ? <p>File Uploaded</p> : <></>}
              </div>

              <div className="file-upload">
                {backCNIC !== null ? <p>File Uploaded</p> : <></>}
              </div>
            </div>

            <div className="row">
              <input
                type="password"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Create Password"
              />
              <input
                type="password"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Re-Type Password"
              />
            </div>
            <div className="row">
              <button type="button" className="btn btn-primary">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
