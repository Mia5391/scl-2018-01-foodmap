
//Zomato API call for restaurants
const restaurants = fetchedRestaurants();

function fetchRestaurantssFromZomatoAPI() {
  let fetchedRestaurants = [];
  fetch('API URL')
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
  return restaurants.filter(restaurant => restaurant.name.toUpperCase().includes(upperCaseSearch) || restaurant.cuisine.includes(upperCaseSearch));
};
