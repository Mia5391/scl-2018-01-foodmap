window.onload = function browserSupportLocation(){
	let output = document.getElementById('map');
  let latitude = 0;
  let longitude = 0;

	if (navigator.geolocation) {
		navigator.geolocation.watchPosition(obtainCoordinates);
	}else{
		output.innerHTML = "<p>Congratulations! Your browser has no idea where you are</p>";
	};

	showRestaurantList();

  function showRestaurantList(){
    let apiResponse = fetchRestaurantsFromAPI(userInput,latitude.toString(),longitude.toString());
		console.log(apiResponse);

		for (let restaurant in apiResponse){
			restaurantListDiv.innerHTML+='<div>'+restaurant.restaurant.name+'</div>'
		}
    console.log(apiResponse);
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
