import React from "react";
import "../css/LoginScreen.css";
import frame from "../imgs/frame.png";
import plants from "../imgs/plants.png";
import head from "../imgs/head.png";
import { useState } from "react";
// import { Link } from "react-router-dom";

const LoginScreen1 = () => {
  const [forget, setForget] = useState(false);
  const handleForget = () => {
    setForget(!forget);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className=" col1">
            <img src={frame} alt="frame" />
          </div>
          <div className=" col2">
            <div className="top">
              <div className="imgPlants">
                <img src={plants} alt="plants" />
              </div>
              <div className="imgHead">
                <img src={head} alt="head" />
                <h4>BE ONE OF US!</h4>
              </div>
            </div>
            <div className="bottom">
              <form>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="CNIC Number"
                />
                <input
                  type="password"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Password"
                />
                {!forget ? (
                  <div>
                    <button type="button" className="btn btn-primary">
                      LOGIN
                    </button>
                    <button
                      type="button"
                      className="btn"
                      onClick={handleForget}
                    >
                      Forget Password?
                    </button>

                    <p className="para">
                      Don't have account?
                      <span>
                        <a> Sign up</a>
                      </span>
                    </p>
                  </div>
                ) : (
                  <div>
                    <button
                      type="button"
                      className="btn"
                      onClick={handleForget}
                    >
                      Forget Password?
                    </button>
                    <input
                      type="number"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="CNIC Number"
                    />

                    <input
                      type="password"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="New Password"
                    />
                    <input
                      type="password"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Re-type Password"
                    />
                    <button type="button" className="btn btn-primary">
                      SUBMIT
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default LoginScreen1;
