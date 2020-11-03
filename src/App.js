import React, { useState } from "react"
import './App.css';
import NumOfDevelopers from "./components/NumOfDevelopers";
import NumOfResources from "./components/NumOfResources";
import { useSelector } from "react-redux";
import { selectResources } from "./store/resources/selectors";
import { selectDevelopers } from "./store/developers/selectors";
import { selectDevelopersWithFavorite } from "./store/developers/selectors";
import { selectDevelopersFavoritesResources } from "./store/selectors";
import { selectLoggedinUser } from "./store/selectors"
import ResourcesSection from "./components/ResourcesSection";




function App() {
  const resources = useSelector(selectResources)
  console.log("RESOURCES", resources)

  const developers = useSelector(selectDevelopers)

  const [ favoriteId, setFavoriteId ] = useState(1)
  // console.log("SELECT OPTION", selectOption)
  const [ developerId, setDeveloperId ] = useState(1)
  

  const developersWithFavorite = useSelector(selectDevelopersWithFavorite(favoriteId))
  console.log("Devs with favorite", developersWithFavorite)

  const favoriteResources = useSelector(
    selectDevelopersFavoritesResources(developerId)
  );
  
  console.log("FAVOURITE RESOURCES", favoriteResources)
 
  const loggedInUserName = useSelector(selectLoggedinUser)
  console.log("LOGGED IN USER", loggedInUserName)


  return (
    <div className="App">
      <header>
  <p>Welcome back, <strong>{loggedInUserName}</strong>!</p>
      </header>
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

      <h3>What are 
        <select value={developerId} onChange={event => setDeveloperId(parseInt(event.target.value))}>
          {developers.map(developer => {
            return <option value={developer.id} key={developer.id}>{developer.name}</option>
          })}
        </select>
      's favourites?</h3>
      <ul>
      {favoriteResources.map(resource => {
              return <li key={resource.id}>{resource.name}</li>;
            })}
      </ul>
      <ResourcesSection/>
    </div>
  );
}

export default App;
