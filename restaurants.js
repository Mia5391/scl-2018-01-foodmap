
/*Zomato API call for restaurants
const restaurants = fetchRestaurantsFromAPI();

function fetchRestaurantsFromAPI() {
  let fetchedRestaurants = [];
  fetch('https://developers.zomato.com/api/v2.1/establishments?city_id=83')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        fetchedRestaurants.push(data[i]);
      }
    });
    return fetchedRestaurants; //array of objects
}




const searchResult = filterRestaurants();

window.filterRestaurants = (search) => {
  let search = "";
  let upperCaseSearch = search.toUpperCase();
  return restaurants.filter(restaurant => restaurant.name.toUpperCase().includes(upperCaseSearch) ||
         restaurant.cuisine.includes(upperCaseSearch));
};
