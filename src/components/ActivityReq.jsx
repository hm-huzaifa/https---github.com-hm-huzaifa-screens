import React from "react";
import { useState } from "react";
import "../css/ActivityReq.css";

const ActivityReq = () => {
  const [title, setTitle] = useState("My Title");
  const [buget, setBuget] = useState(69);
  const [desc, setDesc] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quia aperiam quae asperiores quas inventore optio harum maxime perspiciatis voluptates ad doloribus illo tenetur reiciendis autem minima aliquam sed. Reprehenderit."
  );

  return (
    <>
      <div className="container">
        <div className="bit-content">
          <h2>Activity Request</h2>
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
        </div>
      </div>
    </>
  );
};

export default ActivityReq;
