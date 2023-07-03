import React from "react";
import image01 from "./image/image01.png";
import image02 from "./image/image02.png";

const ChapterDetails = () => {
  let showdata = [
    {
      name: "Introduction",
      id: 1,
      image: image01,
    },
    {
      name: "System of units",
      id: 2,
      image: image02,
    },

    {
      name: "Lecture 3",
      id: 3,
      image: image01,
    },
    {
      name: "Lecture 4",
      id: 4,
      image: image02,
    },

    {
      name: "Lecture 5",
      id: 5,
      image: image01,
    },
  ];

  return (
    <div className="chapter-details">
      <div className="lecture-cont">
        <div className="head">
          <div className="box">0%</div>
          <div className="text">
            <h4>Unit &amp; Dimensions</h4>
            <span>Lectures: 20</span>
          </div>
        </div>
        <div className="icon">{">"}</div>
      </div>
      <div className="lecture-list">
        {showdata.map((item) => (
          <div className="lecture-item" key={item.id}>
            <img src={item.image} alt="" />
            <p className="lecture-name">{item.name}</p>
          </div>
        ))}
      </div>
      <div className="lecture-cont">
        <div className="head">
          <div className="box">0%</div>
          <div className="text">
            <h4>Unit &amp; Dimensions</h4>
            <span>Lectures: 20</span>
          </div>
        </div>
        <div className="icon">{">"}</div>
      </div>
      <div className="lecture-list">
        {showdata.map((item) => (
          <div className="lecture-item" key={item.id}>
            <img src={item.image} alt="" />
            <p className="lecture-name">{item.name}</p>
          </div>
        ))}
      </div>
      <div className="lecture-cont">
        <div className="head">
          <div className="box">0%</div>
          <div className="text">
            <h4>Unit &amp; Dimensions</h4>
            <span>Lectures: 20</span>
          </div>
        </div>
        <div className="icon">{">"}</div>
      </div>
      <div className="lecture-list">
        {showdata.map((item) => (
          <div className="lecture-item" key={item.id}>
            <img src={item.image} alt="" />
            <p className="lecture-name">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChapterDetails;
