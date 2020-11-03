import React from 'react'
import { useSelector } from "react-redux";
import { selectResources } from "../store/resources/selectors";
import AddResourceForm from "./AddResourceForm";




export default function ResourcesSection() {
    
    const allResources = useSelector(selectResources)

    return (
        <div>
            <h2>All resources</h2>
            {allResources.map(resource => {
                return <p>
                    <strong>{resource.name}</strong> 
            <em>{" "}({resource.type}) </em>-- Find out more at <a href="url">{resource.url}</a>
                </p>
            })}
            <AddResourceForm/>
        </div>
    )
}
