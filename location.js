function browserSupportLocation(){
			let output = document.getElementById('map');

			if (navigator.geolocation) {
				output.innerHTML = "<p>Big Brother is watching you</p>";
			}else{
				output.innerHTML = "<p>Congratulations! Your browser has no idea where you are</p>";
			};

			function obtainCoordinates(position){
				let latitude = position.coords.latitude;
				let longitude = position.coords.longitude;
				let imgURL = "https://maps.googleapis.com/maps/api/staticmap?center="+latitude+","+longitude+"&size=600x300&markers=color:red%7C"+latitude+","+longitude+"&key=AIzaSyCt45eKTDB21lu1mEeMNtIcIjApqWyblhA";
				output.innerHTML ="<img src='"+imgURL+"'>";

			};
