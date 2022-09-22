import React, { useState } from "react";
import "../css/Profile.css";

const Profile = () => {
  const [profileImg, setProfileImg] = useState(
    "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  );
  return (
    <>
      <div className="navbar">
        <nav>Navbar</nav>
      </div>
      <div className="container">
        <div className="info">
          <div className="personal">
            <img src={profileImg} alt="dp" />
            <div className="name">
              <span>NAME</span>
              <span>TAG LINE</span>
            </div>
          </div>
          <div className="card">
            <h4>SKILLS</h4>
          </div>
          <div className="card">
            <h4>Language</h4>
          </div>
          <div className="card">
            <h4>Certificates</h4>
          </div>
        </div>
        <div className="description">description</div>
      </div>
      ;
    </>
  );
};

export default Profile;
