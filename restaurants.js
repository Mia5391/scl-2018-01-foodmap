window.fetchRestaurantsFromAPI = (userInput, latitude, longitude) => {
  let fetchedRestaurants = [];
  let requestHeaders = new Headers();
  requestHeaders.append("user-key", "eab450ec9bce02c19d542546564b2853");
  let init = { method: 'GET',
               headers: requestHeaders };
  fetch('https://developers.zomato.com/api/v2.1/search?entity_id=83&entity_type=city&count=1&lat='+latitude+'&lon='+longitude + '&radius=500',
    init)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        fetchedRestaurants.push(data[i]);
      }
    });
    return fetchedRestaurants; //array of objects
};
