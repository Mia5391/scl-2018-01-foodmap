window.onload = function browserSupportLocation(){
	let output = document.getElementById('map');

	if (navigator.geolocation) {
		navigator.geolocation.watchPosition(obtainCoordinates);
	}else{
		output.innerHTML = "<p>Congratulations! Your browser has no idea where you are</p>";
	};

	function obtainCoordinates(position){
		let latitude = position.coords.latitude;
		let longitude = position.coords.longitude;
    console.log(latitude);
    console.log(longitude);
	};

  function showMap(location){
    let options = {
      enableHighAccuracy:true
    };
  }



};
