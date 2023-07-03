import React from "react";
import image01 from "./image/image01.png";
import image02 from "./image/image02.png";

const ChapterDetails = ({ chapterData }) => {
  const getImagesForChapter = (childrenCount) => {
    const images = [image01, image02];
    const repeatedImages = [];
    for (let i = 0; i <= childrenCount; i++) {
      const index = i % images.length;
      repeatedImages.push(images[index]);
    }
    return repeatedImages;
  };

  return (
    <div>
      {chapterData.map((chapter) => (
        <div className="chapter-details" key={chapter.node_id}>
          <div className="lecture-cont">
            <div className="head">
              <div className="box">0%</div>
              <div className="text">
                <h4>{chapter.display_name}</h4>
                <span>Lectures: {chapter.children.length}</span>
              </div>
            </div>
            <div className="icon">{">"}</div>
          </div>
          <div className="lecture-list">
            {chapter.children.map((child, index) => (
              <div className="lecture-item" key={child.node_link_id}>
                <img
                  src={getImagesForChapter(chapter.children.length)[index]}
                  alt=""
                />
                <p className="lecture-name">{child.display_name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChapterDetails;