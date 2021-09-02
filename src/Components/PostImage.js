import React from "react";
import "./PostImage.css";

const PostImage = (props) => {
  return (
    <div>
      <img src={props.imgSrc} alt={props.altText} />
    </div>
  );
};
export default PostImage;
