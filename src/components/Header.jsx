import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <div className="heading">
      <FontAwesomeIcon icon={faBookOpen} />
        <h1>
       
          Index
        </h1>
  
      </div>
      
    </div>
  );
};

export default Header;
