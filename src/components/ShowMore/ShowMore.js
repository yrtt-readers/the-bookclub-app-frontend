import React, { useState } from 'react';

function ShowMore({ text, length = 200 }) {
   
    const [showLess, setShowLess] = useState(true);

    if (text.length < length) {
        return <p>{text}</p>;
    }

    return (
        <p>
            <p>{ showLess ? `${text.slice(0, length)}...` : text }</p>
            <a
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => setShowLess(!showLess)}
            >
            &nbsp;View {showLess ? "More" : "Less"}
            </a>
        </p>
    );
}

export default ShowMore;