import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./ChapteList.css"; // Import the CSS file
import Header from "./Header";
import axios from "axios";

const ChapteList = () => {
  const [chapters, setChapters] = useState([]);

  function apicall() {
    axios
      .get("https://api.esaral.com/v2/general/physics-dummy-data")
      .then((response) => {
        console.log(response.data)
        console.log(response.data.data.node_tree)
       console.log(response.data.data.node_tree)
        // console.log(response.data.success)
        // console.log(response.data.node_tree);
        // setChapters(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    apicall();
  }, []);

  return (
    <div>
      <div className="header-input">
        <Header />
      </div>
      <div className="chapte-list-container">
        <div className="sidebar-container">
          <h1>Chapter List</h1>
          <ul>
            {chapters && chapters.length > 0 ? (
              chapters.map((chapter, index) => (
                <li key={index}>
                  <Link to={`/chapter/${encodeURIComponent(chapter.display_name)}`}>
                    {chapter.display_name}
                  </Link>
                </li>
              ))
            ) : (
              <li>No chapters found</li>
            )}
          </ul>
        </div>
        <div className="content-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ChapteList;
