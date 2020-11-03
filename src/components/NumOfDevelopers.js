import React from "react";
import { useSelector } from "react-redux";


const selectDevelopers = reduxState => {
  return reduxState.developers;
};



export default function NumOfDevelopers() {
    const developers = useSelector(selectDevelopers)
    console.log("What is developers", developers)


    return (
        <div>
            <h2><strong>{developers.length}</strong></h2>
            <p>developers</p>
        </div>
    )
}
