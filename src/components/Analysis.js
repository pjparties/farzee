import React, { useState } from "react";

const SpamMessage = () => {
    const [score, setScore] = useState(0);

    const handleScoreChange = (event) => {
        setScore(parseInt(event.target.value));
    }

    let message;

    if (score < 40) {
        message = "This message is most likely not spam.";
    } else if (score < 70) {
        message = "This message may be spam. Please be cautious.";
    } else if (score < 90) {
        message = "This message is likely spam. Please be very cautious.";
    } else {
        message = "This message is almost certainly spam. Please delete it immediately.";
    }

    return (
        <div>
            <input type="number" min="0" max="100" value={score} onChange={handleScoreChange} />
            <h2 className="report"> 
                {message}
            </h2>
        </div>
    );
}

export default SpamMessage;
