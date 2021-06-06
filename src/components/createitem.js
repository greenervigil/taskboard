import React from 'react'

export default function CreateItem ({ linkTo, text, addItem }) {
    
    const ignore = () => {
        document.getElementById(linkTo).setAttribute("hidden", "hidden")
    }

    return (
        <>
            <textarea id={text} className="createCard" cols="29" rows="3" placeholder="Enter a title for this card..."></textarea>
            <div className="buttons">
                <button id="newItem" onClick={addItem}><strong>Add Card</strong></button>
                <button id="exit" onClick={ignore}>X</button>
            </div>
        </>
    )
}