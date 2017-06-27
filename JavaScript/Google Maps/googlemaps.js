function myMap() {
	var lokacija = {lat: 46.025, lng: 14.47};
	var lokacija_marker = {lat: 45.951378, lng: 14.382142};
	var mapa = new google.maps.Map(document.getElementById("google_map"), {
	  zoom: 11,
	  center: lokacija
	});
	var marker = new google.maps.Marker({
	  position: lokacija_marker,
	  map: mapa
	});
	
	mapa.setOptions({'scrollwheel': false});	
}