import React, { useState } from "react"
import './App.css';
import NumOfDevelopers from "./components/NumOfDevelopers";
import NumOfResources from "./components/NumOfResources";
import { useSelector } from "react-redux";
import { selectResources } from "./store/resources/selectors";
import { selectDevelopers } from "./store/developers/selectors";
import { selectDevelopersWithFavorite } from "./store/developers/selectors"




function App() {
  const resources = useSelector(selectResources)
  console.log("RESOURCES", resources)

  const developers = useSelector(selectDevelopers)

  const [ favoriteId, setFavoriteId ] = useState(1)
  // console.log("SELECT OPTION", selectOption)

  const developersWithFavorite = useSelector(selectDevelopersWithFavorite(favoriteId))
  console.log("Devs with favorite", developersWithFavorite)
  
  
  // const developersWithThisFavorite = developers.filter(developer => {
  //   return developer.favorites.includes(favoriteId)
  // })



  return (
    <div className="App">
      <h1>Web development resources</h1>
      <NumOfDevelopers/> 
      <NumOfResources/>
      <h3>Who likes 
      <select name="resources" value={favoriteId} onChange={event => setFavoriteId(parseInt(event.target.value))}>
        {resources.map(resource => {
          return <option value={resource.id} key={resource.id}>{resource.name}</option>
        })}
  
      </select> ?
      </h3>
      <ul>
       {developersWithFavorite.map(developer => {
         return <li>{developer.name}</li>
       })}
       </ul>
    </div>
  );
}

export default App;
