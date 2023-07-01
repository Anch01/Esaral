import React from "react";
import { useParams } from "react-router-dom";

const ChapterDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h3> {id} </h3>
      <h5>lecture:20</h5>
      <img></img>
    </div>
  );
};

export default ChapterDetails;
