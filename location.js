window.onload = function browserSupportLocation(){
	let output = document.getElementById('map');
  let latitude = 0;
  let longitude = 0;

	if (navigator.geolocation) {
		navigator.geolocation.watchPosition(obtainCoordinates);
	}else{
		output.innerHTML = "<p>Congratulations! Your browser has no idea where you are</p>";
	};

  function showRestaurantList(){
    let restaurantList = fetchRestaurantsFromAPI(userInput,latitude.toString(),longitude.toString());
    console.log(restaurantList);
  }

	function obtainCoordinates(position){
		latitude = position.coords.latitude;
		longitude = position.coords.longitude;

    showRestaurantList()
    
    console.log(latitude);
    console.log(longitude);
	};

  function showMap(location){
    let options = {
      enableHighAccuracy:true
    };
  }

};
