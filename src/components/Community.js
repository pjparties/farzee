import React, { useState, useEffect } from "react";
import "../styles/Community.css";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

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
        <div className="bar-main">

            <div className="bar-container">
                <div className="like-bar" style={{
                    width: `${ratioLikes * 100}%`,
                }}></div>

            </div>

            <div className="like-dislike-container">

                <div className="like-container">
                    <p>{likes}</p>
                    <AiFillLike className="like-button" onClick={() => setLikes(likes + 1)} />
                </div>

                <div className="dislike-container">
                    <p>{dislikes} </p>
                    <AiFillDislike classname="dislike-button" onClick={() => setDislikes(dislikes + 1)} />
                </div>
            </div>
        </div>
    );
};

export default LikeDislike;
