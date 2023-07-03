import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import ChapterList from "./ChapterList";
import ChapterDetails from "./ChapterDetails";
import "./styleList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [chapterData, setChapterData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://apimocha.com/chapters/list");
        const nodeTree = response.data.data.node_tree;
        setChapterData(nodeTree);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="main-container">
      <div className="left-nav">
        <Header />
        <ChapterList chapterData={chapterData} />
      </div>
      <main>
        <div className="container">
          <div className="top">
            <div className="grp">
              <FontAwesomeIcon icon={faArrowLeft} />
              <h1 className="heading">Physics</h1>
            </div>
          </div>
          <ChapterDetails chapterData={chapterData} />
        </div>
      </main>
    </div>
  );
};

export default App;
