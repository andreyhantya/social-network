import React from "react";

const DialogItem = (props) => {
    return (
        <div>
            <div className="dialog-message">{props.message}</div>
        </div>
    )
};

export default DialogItem;