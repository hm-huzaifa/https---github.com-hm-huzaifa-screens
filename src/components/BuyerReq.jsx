import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../css/ActivityReq.css";

const BuyerReq = () => {
  const [title, setTitle] = useState("My Title");
  const [buget, setBuget] = useState(69);
  const [desc, setDesc] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quia aperiam quae asperiores quas inventore optio harum maxime perspiciatis voluptates ad doloribus illo tenetur reiciendis autem minima aliquam sed. Reprehenderit."
  );
  const [profileImg, setImg] = useState(
    "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  );

  let today = new Date();

  let date =
    today.getDate() +
    "-" +
    parseInt(today.getMonth() + 1) +
    "-" +
    today.getFullYear();

  return (
    <>
      <div className="container row ">
        <div className="col col-6 col-md-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src={profileImg}
                  alt="Admin"
                  className="rounded-circle"
                  width="150"
                />
                <div className="mt-3">
                  <h4>John Doe</h4>
                  <p className="text-secondary mb-1">{date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col bit-content">
          <h2>Buyer Request</h2>
          <div className="container-h">
            <h4>{title}</h4>
            <div className="container-buget">
              <h6>Buget</h6>
              <span>{buget} $</span>
            </div>
          </div>
          <div className="desc">
            <p className="card-text">{desc}</p>
          </div>

          <div className="container-category">
            <h6>Category</h6>
            <span>WEB</span>
          </div>

          <div className="submit">
            <button type="button" class="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyerReq;
