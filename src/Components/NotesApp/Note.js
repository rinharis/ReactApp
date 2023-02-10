import React from "react";

const Note = ({ id, text, date, handleDeleteNote }) => {
    return (
        <div className='note'>
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <i className="fa fa-trash delete-icon"
                    onClick={() => handleDeleteNote(id)} />
            </div>
        </div>
    )
};

export default Note ;
