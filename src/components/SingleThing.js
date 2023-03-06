import { useState } from "react"

import { useParams } from "react-router-dom"

const SingleThing = (props) => {
    const { id } = useParams () ;
    const { thingProps } = props;

    const mySelectedThing = thingProps[id]

    return (
        <div>
            <h3> Here you can find information about your selected thing </h3>
            <p> Title {mySelectedThing.title} </p>
            <p> Price {mySelectedThing.price} </p>
            <p> Description {mySelectedThing.description} </p>
        </div>
    )
}

export default SingleThing;