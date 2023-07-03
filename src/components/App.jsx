import React from "react";
import Header from "./Header";
import ChapterList from "./ChapterList";
import ChapterDetails from "./ChapterDetails";
import "./styleList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft,faSearch } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <div className="main-container">
      <div className="left-nav">
        <Header />
        <ChapterList />
      </div>
      <main>
        <div className="container">
          <div className="top">
            <div className="grp">
            <FontAwesomeIcon icon={faArrowLeft} />
              <h1 className="heading">Physics</h1>
              {/* <FontAwesomeIcon icon={faSearch} /> */}
            </div>
          </div>
          <ChapterDetails />
        </div>
      </main>
    </div>
  );
};

export default App;
