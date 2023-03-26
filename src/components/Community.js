import React, { useState, useEffect } from "react";
import "../styles/Community.css";
import {AiFillLike} from "react-icons"

const LikeDislike = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [ratioLikes, setRatioLikes] = useState(0);

  useEffect(() => {
    const total = likes + dislikes;
    const ratio = likes / total;
    setRatioLikes(ratio);
  }, [likes, dislikes]);

  return (
    <div>
      <div className="bar-container">
        <div
          className="like-bar"
          style={{
            width: `${ratioLikes * 100}%`,
          }}
        ></div>
      </div>
      <button id="like-button" onClick={() => setLikes(likes + 1)}>Like</button>
      <button id="dislike-button" onClick={() => setDislikes(dislikes + 1)}>Dislike</button>
      <p>{likes} likes</p>
      <p>{dislikes} dislikes</p>
    </div>
  );
};

export default LikeDislike;
