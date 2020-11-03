export const selectDevelopersFavoritesResources = developerId => state => {
    const selectedDeveloper = state.developers.find(dev => dev.id === developerId);
    console.log("DEVELOPER", selectedDeveloper)
    if (!selectedDeveloper) {
      return [];
    }
  
    return state.resources.filter(resource => {
      return selectedDeveloper.favorites.includes(resource.id);
    });
  };


  export const selectLoggedinUser = reduxState => {
    const loggedInUser = reduxState.developers.find(dev => {
      return reduxState.user.id === dev.id
    })
    return loggedInUser.name
  }