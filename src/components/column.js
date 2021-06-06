import React, { useState } from 'react'
import Card from './card'
import CreateItem from './createitem'

export default function Column ({ title, data = [], category, onHandleDrop }) {
    const [items, setItems] = useState(data.filter(item => item.category === category))
    const textarea = `${title}TextArea`
    const handleCreateItem = () => {
        document.getElementById(title).removeAttribute("hidden")
    }

    const handleAddItem = () => {
        var updateArray = items.concat({ title: document.getElementById(textarea).value})
        setItems(updateArray)
        document.getElementById(textarea).value = ""
        document.getElementById(title).setAttribute("hidden", "hidden")
    }

    const handleDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
    //console.log(e.target)
    };

    return (
        <div className="column" 
            onDrop={e => onHandleDrop(e, category)}
            onDragOver={e => handleDragOver(e)}
        >
            <h5>{title}</h5>
            {items.map((item, key) => {
                return (
                    <Card key={key} dataItem={`${title}-${key}`} title={item.title} />
                )
            })}
            <div className="create" id={title} hidden>
                <CreateItem linkTo={title} text={textarea} addItem={handleAddItem} />
            </div>
            <button  id="add" onClick={handleCreateItem}>+ Add another card</button>
        </div>
    )
}