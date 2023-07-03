import React from "react";

const ChapterList = ({ chapterData }) => {
  return (
    <div className="list-nav">
      <ul className="nav">
        {chapterData && chapterData.map((ele) => (
          <li className="nav-items" key={ele.node_id}>
            {ele.display_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChapterList;
