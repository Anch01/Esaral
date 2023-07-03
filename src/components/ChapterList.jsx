import React, { useState, useEffect } from "react";
import axios from "axios";

const ChapterList = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios.get("https://apimocha.com/chapters/list")
      .then((response) => {
        console.log(response.data.data);
        setState(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="list-nav">
      <ul className="nav">
        {state.node_tree &&
          state.node_tree.map((ele) => (
            <li className="nav-items">{ele.display_name}</li>
          ))}
      </ul>
    </div>
  );
};

export default ChapterList;
