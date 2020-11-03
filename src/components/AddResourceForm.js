import React, {useState } from 'react';
import { useDispatch } from "react-redux";
import { addResource } from "../store/resources/action";

export default function AddResourceForm() {
    const [ formName, setFormName ] = useState("")
    const [ formType, setFormType ] = useState("")
    const [ formUrl, setFormUrl ] = useState("")

    const dispatch = useDispatch();


    function handleSubmit(event) {
        event.preventDefault();
        console.log("submitted form details", {formName, formType, formUrl})

        dispatch(addResource(formName, formType, formUrl))
        setFormName("")
        setFormType("")
        setFormUrl("")
    }


    return (
        <div>
            <h2>Add a resource!</h2>
            <form type="input" onSubmit={handleSubmit}>
                <div>
                <label>Name:
                <input 
                onChange={event => setFormName(event.target.value)}
                type="text"
                name="name"
                value={formName}
                ></input>
                </label>
                
                </div>
                <div>
                <label>Type:
                <input 
                onChange={event => setFormType(event.target.value)}
                type="text"
                name="type"
                value={formType}
                ></input>
                </label>
                
                </div>
                <div>
                <label>URL:
                <input 
                onChange={event => setFormUrl(event.target.value)}
                type="text"
                name="url"
                value={formUrl}
                ></input>
                </label>

                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
