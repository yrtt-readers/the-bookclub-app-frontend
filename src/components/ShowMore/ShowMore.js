import React, { useState } from 'react';

function ShowMore({ text, style, length = 150 }) {
   
    const [showLess, setShowLess] = useState(true);

    if (text.length < length) {
        return <p className={style}>{text}</p>;
    }

    return (
        <div>
            <p className={style}>{ showLess ? `${text.slice(0, length)}...` : text }</p>
            <a
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => setShowLess(!showLess)}
            >
            &nbsp;View {showLess ? "More" : "Less"}
            </a>
        </div>
    );
}

export default ShowMore;