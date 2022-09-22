import React, { useState } from "react";
import { FaPen } from "react-icons/fa";
import Popup from "reactjs-popup";

import "reactjs-popup/dist/index.css";

const ProfileUser = () => {
  const [profileImg, setProfileImg] = useState(
    "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  );
  const [address, setAddress] = useState("Bay Area, San Francisco, CA");

  const [skill1, setSkill1] = useState("Skill 1");
  const [skill2, setSkill2] = useState("Skill 2");
  const [skill3, setSkill3] = useState("Skill 3");

  const [lang1, setLang1] = useState("Lang 1");
  const [lang2, setLang2] = useState("Lang 2");
  const [lang3, setLang3] = useState("Lang 3");

  const [title, setTitle] = useState("Dummy title");
  const [rate, setRate] = useState("5.5");

  const [description, setDescription] = useState(
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, ratione. Alias quidem iure error laudantium voluptatibus odio eaque, eligendi ab, quae deserunt nam eius veniam excepturi veritatis facilis non illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi excepturi, beatae neque sequi quos animi cum, corporis quod aliquam dolor veritatis quo. Rerum aspernatur nobis soluta placeat, voluptas laudantium dolor? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, ratione. Alias quidem iure error laudantium voluptatibus odio eaque, eligendi ab, quae deserunt nam eius veniam excepturi veritatis facilis non illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi excepturi, beatae neque sequi quos animi cum, corporis quod aliquam dolor veritatis quo. Rerum aspernatur nobis soluta placeat, voluptas laudantium dolor?"
  );
  const [workHistory, setWorkHistory] = useState(
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, ratione. Alias quidem iure error laudantium voluptatibus odio eaque, eligendi ab, quae deserunt nam eius veniam excepturi veritatis facilis non illum."
  );

  const [edit, setEdit] = useState(false);

  const editStyle = {
    visibility: `${edit ? "" : "hidden"}`,
  };

  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "80px",
          background: "aqua",
        }}
      >
        <nav>Navbar</nav>
      </div>

      <div className="container">
        <div className="main-body py-3">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src={profileImg}
                      alt="Admin"
                      className="rounded-circle"
                      width="150"
                    />
                    {edit ? (
                      <span style={editStyle}>
                        <Popup
                          trigger={<FaPen className="ml-3" />}
                          modal
                          nested
                        >
                          {(close) => (
                            <div className="">
                              <button className="btn-md close" onClick={close}>
                                &times;
                              </button>

                              <div className="card-body">
                                <div className="form-group">
                                  <h4>Upload profile image</h4>
                                  <div className="form-outline mb-4">
                                    <input
                                      type="file"
                                      id="form3Example90"
                                      className="form-control form-control-lg"
                                      onChange={(e) => {
                                        setProfileImg(
                                          URL.createObjectURL(e.target.files[0])
                                        );
                                      }}
                                    />
                                    <label
                                      className="form-label"
                                      for="form3Example90"
                                    >
                                      Upload Your Profile image
                                    </label>
                                  </div>
                                  <button
                                    className="btn-sm btn-primary mt-3"
                                    onClick={close}
                                  >
                                    OK
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                        </Popup>
                      </span>
                    ) : (
                      <></>
                    )}
                    <div className="mt-3">
                      <h4>John Doe</h4>
                      <p className="text-secondary mb-1">{title}</p>
                      <p className="text-muted font-size-sm">
                        {address}
                        {edit ? (
                          <span style={editStyle}>
                            <Popup
                              trigger={<FaPen className="ml-3" />}
                              modal
                              nested
                            >
                              {(close) => (
                                <div className="">
                                  <button
                                    className="btn-md close"
                                    onClick={close}
                                  >
                                    &times;
                                  </button>

                                  <div className="card-body">
                                    <div className="form-group">
                                      <h4>Address</h4>
                                      <textarea
                                        className="form-control mt-2"
                                        rows="3"
                                        placeholder="Enter Address"
                                        onChange={(e) => {
                                          setAddress(e.target.value);
                                        }}
                                        value={address}
                                      ></textarea>
                                      <button
                                        className="btn-sm btn-primary mt-3"
                                        onClick={close}
                                      >
                                        OK
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </Popup>
                          </span>
                        ) : (
                          <></>
                        )}
                      </p>
                      {/* <button className="btn btn-success">Message</button> */}
                      <button
                        className="btn btn-info rounded px-3 py-2 m-1"
                        // onClick={submitHandler}
                      >
                        Save Profile
                      </button>
                      <button
                        className="btn btn-info rounded px-3 py-2 m-1"
                        onClick={() => {
                          setEdit(!edit);
                        }}
                      >
                        Edit Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mt-3">
                <h4 className="mt-2 ml-3">Skills</h4>
                <div className="ml-3 mt-2">
                  <p>
                    {skill1}
                    <span style={editStyle}>
                      <Popup trigger={<FaPen className="ml-3" />} modal nested>
                        {(close) => (
                          <div className="">
                            <button className="btn-md close" onClick={close}>
                              &times;
                            </button>

                            <div className="card-body">
                              <div className="form-group">
                                <h4>Skill 1</h4>
                                <input
                                  className="form-control"
                                  placeholder="Enter skill"
                                  onChange={(e) => {
                                    setSkill1(e.target.value);
                                  }}
                                  value={skill1}
                                ></input>
                                <button
                                  className="btn-sm btn-primary mt-3"
                                  onClick={close}
                                >
                                  OK
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </Popup>
                    </span>
                  </p>
                  <p>
                    {skill2}
                    <span style={editStyle}>
                      <Popup
                        style={editStyle}
                        trigger={<FaPen className="ml-3" />}
                        modal
                        nested
                      >
                        {(close) => (
                          <div className="">
                            <button className="btn-md close" onClick={close}>
                              &times;
                            </button>

                            <div className="card-body">
                              <div className="form-group">
                                <h4>Skill 2</h4>
                                <input
                                  className="form-control"
                                  placeholder="Enter skill"
                                  onChange={(e) => {
                                    setSkill2(e.target.value);
                                  }}
                                  value={skill2}
                                ></input>
                                <button
                                  className="btn-sm btn-primary mt-3"
                                  onClick={close}
                                >
                                  OK
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </Popup>
                    </span>
                  </p>
                  <p>
                    {skill3}
                    <span style={editStyle}>
                      <Popup trigger={<FaPen className="ml-3" />} modal nested>
                        {(close) => (
                          <div className="">
                            <button className="btn-md close" onClick={close}>
                              &times;
                            </button>

                            <div className="card-body">
                              <div className="form-group">
                                <h4>Skill 3</h4>
                                <input
                                  className="form-control"
                                  placeholder="Enter skill"
                                  onChange={(e) => {
                                    setSkill3(e.target.value);
                                  }}
                                  value={skill3}
                                ></input>
                                <button
                                  className="btn-sm btn-primary mt-3"
                                  onClick={close}
                                >
                                  OK
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </Popup>
                    </span>
                  </p>
                </div>
              </div>

              <div className="card mt-3">
                <h4 className="mt-2 ml-3">Languages</h4>
                <div className="ml-3 mt-2">
                  <p>
                    {lang1}
                    <span style={editStyle}>
                      <Popup trigger={<FaPen className="ml-3" />} modal nested>
                        {(close) => (
                          <div className="">
                            <button className="btn-md close" onClick={close}>
                              &times;
                            </button>

                            <div className="card-body">
                              <div className="form-group">
                                <h4>Language 1</h4>
                                <input
                                  className="form-control"
                                  placeholder="Enter skill"
                                  onChange={(e) => {
                                    setLang1(e.target.value);
                                  }}
                                  value={lang1}
                                ></input>
                                <button
                                  className="btn-sm btn-primary mt-3"
                                  onClick={close}
                                >
                                  OK
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </Popup>
                    </span>
                  </p>
                  <p>
                    {lang2}
                    <span style={editStyle}>
                      <Popup trigger={<FaPen className="ml-3" />} modal nested>
                        {(close) => (
                          <div className="">
                            <button className="btn-md close" onClick={close}>
                              &times;
                            </button>

                            <div className="card-body">
                              <div className="form-group">
                                <h4>Language 2</h4>
                                <input
                                  className="form-control"
                                  placeholder="Enter skill"
                                  onChange={(e) => {
                                    setLang2(e.target.value);
                                  }}
                                  value={lang2}
                                ></input>
                                <button
                                  className="btn-sm btn-primary mt-3"
                                  onClick={close}
                                >
                                  OK
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </Popup>
                    </span>
                  </p>
                  <p>
                    {lang3}
                    <span style={editStyle}>
                      <Popup trigger={<FaPen className="ml-3" />} modal nested>
                        {(close) => (
                          <div className="">
                            <button className="btn-md close" onClick={close}>
                              &times;
                            </button>

                            <div className="card-body">
                              <div className="form-group">
                                <h4>Language 3</h4>
                                <input
                                  className="form-control"
                                  placeholder="Enter skill"
                                  onChange={(e) => {
                                    setLang3(e.target.value);
                                  }}
                                  value={lang3}
                                ></input>
                                <button
                                  className="btn-sm btn-primary mt-3"
                                  onClick={close}
                                >
                                  OK
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </Popup>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <div className="card mb-3">
                <div className="mt-3 ml-3">
                  <h4>
                    <span>{title}</span>
                    <span style={editStyle}>
                      <Popup trigger={<FaPen className="ml-3" />} modal nested>
                        {(close) => (
                          <div className="">
                            <button className="btn-md close" onClick={close}>
                              &times;
                            </button>
                            <div className="card-body">
                              <div className="form-group">
                                <h4>Title</h4>
                                <input
                                  className="form-control"
                                  placeholder="Enter Title"
                                  onChange={(e) => {
                                    setTitle(e.target.value);
                                  }}
                                  value={title}
                                ></input>
                                <button
                                  className="btn-sm btn-primary mt-3"
                                  onClick={close}
                                >
                                  OK
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </Popup>
                    </span>
                    <span
                      className="ml-5"
                      style={{ float: "right", marginRight: "5%" }}
                    >
                      {" "}
                      $ {rate} /hr
                    </span>
                    <span style={editStyle}>
                      <Popup trigger={<FaPen className="ml-3" />} modal nested>
                        {(close) => (
                          <div className="">
                            <button className="btn-md close" onClick={close}>
                              &times;
                            </button>
                            <div className="card-body">
                              <div className="form-group">
                                <h4>Hourly Rate</h4>
                                <input
                                  className="form-control"
                                  placeholder="Enter Title"
                                  onChange={(e) => {
                                    setRate(e.target.value);
                                  }}
                                  value={rate}
                                ></input>
                                <button
                                  className="btn-sm btn-primary mt-3"
                                  onClick={close}
                                >
                                  OK
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </Popup>
                    </span>
                  </h4>
                </div>
                <div className="card-body">
                  <h5>Description</h5>
                  <p>
                    {description}
                    <span style={editStyle}>
                      <Popup trigger={<FaPen className="ml-3" />} modal nested>
                        {(close) => (
                          <div className="">
                            <button className="btn-md close" onClick={close}>
                              &times;
                            </button>
                            <div className="card-body">
                              <div className="form-group">
                                <h4>Descriptioin</h4>
                                <textarea
                                  className="form-control mt-2"
                                  rows="3"
                                  placeholder="Enter description"
                                  onChange={(e) => {
                                    setDescription(e.target.value);
                                  }}
                                  value={description}
                                ></textarea>
                                <button
                                  className="btn-sm btn-primary mt-3"
                                  onClick={close}
                                >
                                  OK
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </Popup>
                    </span>
                  </p>

                  <a>more</a>
                </div>
              </div>
              <div className="card mb-3">
                <div className="mt-3 ml-3">
                  <h3>Work History</h3>
                </div>
                <div className="card-body">
                  <p>
                    {workHistory}
                    <span style={editStyle}>
                      <Popup trigger={<FaPen className="ml-3" />} modal nested>
                        {(close) => (
                          <div className="">
                            <button className="btn-md close" onClick={close}>
                              &times;
                            </button>
                            <div className="card-body">
                              <div className="form-group">
                                <h4>Descriptioin</h4>
                                <textarea
                                  className="form-control mt-2"
                                  rows="3"
                                  placeholder="Enter work history"
                                  onChange={(e) => {
                                    setWorkHistory(e.target.value);
                                  }}
                                  value={workHistory}
                                ></textarea>
                                <button
                                  className="btn-sm btn-primary mt-3"
                                  onClick={close}
                                >
                                  OK
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </Popup>
                    </span>
                  </p>
                  <a>more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
