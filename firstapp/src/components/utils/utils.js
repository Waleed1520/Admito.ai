import React from "react";

export const addNewLine = (msg) => {
    if (!msg) return null;

    // Split the string by \n that is not preceded by an asterisk
    const parts = msg.split(/(?<!\*)\n/);

    return parts.map((line, index) => (
        <React.Fragment key={index}>
            {line}
            {/* Add <br /> after each line except the last one */}
            {index < parts.length - 1 && <br />}
        </React.Fragment>
    ));
};

