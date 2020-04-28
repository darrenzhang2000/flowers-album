import React from "react"

const FlowerCard = (props) => {
    return (
        <div>
            <img src={props.image} />
            <p>{props.name}</p>
        </div>
    )
}

export default FlowerCard
