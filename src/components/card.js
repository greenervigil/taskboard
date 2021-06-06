import React from 'react'

export default function Card({ title, dataItem }) {
    const handleOnDragStart = (event, title) => {
        event.dataTransfer.setData("title", title)
        event.dataTransfer.setData("id", dataItem)
    }
    return (
        <div className="item" dataitem={dataItem} onDragStart={e => handleOnDragStart(e, title, dataItem)} draggable>
            <p>{title}</p>
        </div>
    )
}