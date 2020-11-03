import React from 'react'
import { useSelector } from "react-redux";

const selectResources = reduxStore => {
    return reduxStore.resources
}


export default function NumOfResources() {
    const resources = useSelector(selectResources)

    return (
        <div>
            <h2><strong>{resources.length}</strong></h2>
            <p>resources</p>
        </div>
    )
}
