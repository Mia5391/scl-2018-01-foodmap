window.fetchRestaurantsFromAPI = (restaurantsDiv, userInput, latitude, longitude) => {
  let restaurantListDiv = document.getElementById('restaurant-list');
  let fetchedRestaurants = [];
  let requestHeaders = new Headers();
  requestHeaders.append("user-key", "eab450ec9bce02c19d542546564b2853");
  let init = { method: 'GET',
               headers: requestHeaders };
  fetch('https://developers.zomato.com/api/v2.1/search?entity_id=83&entity_type=city&count=2&lat='+latitude+'&lon='+longitude + '&radius=1000',
    init)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        fetchedRestaurants.push(data[i]);
      }
      return fetchedRestaurants.map;
    }).catch(function() {
      console.log("there was an error");
    });
    //ppreturn fetchedRestaurants; //array of objects
};
