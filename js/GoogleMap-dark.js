$(document).ready(function (){
		
	/* Google Map
	-----------------------------------------------------*/
	
	function mapInitialize() {
		
	var mapDark =  [
				  {
					  "stylers": [
						  {
							  "hue": "#ff1a00"
						  },
						  {
							  "invert_lightness": true
						  },
						  {
							  "saturation": -100
						  },
						  {
							  "lightness": 33
						  },
						  {
							  "gamma": 0.5
						  }
					  ]
				  },
				  {
					  "featureType": "water",
					  "elementType": "geometry",
					  "stylers": [
						  {
							  "color": "#2D333C"
						  }
					  ]
				  }
			  ];
			  
	  var mapLight =  [
				  {
					  "featureType": "landscape",
					  "elementType": "labels",
					  "stylers": [
						  {
							  "visibility": "off"
						  }
					  ]
				  },
				  {
					  "featureType": "transit",
					  "elementType": "labels",
					  "stylers": [
						  {
							  "visibility": "off"
						  }
					  ]
				  },
				  {
					  "featureType": "poi",
					  "elementType": "labels",
					  "stylers": [
						  {
							  "visibility": "off"
						  }
					  ]
				  },
				  {
					  "featureType": "water",
					  "elementType": "labels",
					  "stylers": [
						  {
							  "visibility": "off"
						  }
					  ]
				  },
				  {
					  "featureType": "road",
					  "elementType": "labels.icon",
					  "stylers": [
						  {
							  "visibility": "off"
						  }
					  ]
				  },
				  {
					  "stylers": [
						  {
							  "hue": "#00aaff"
						  },
						  {
							  "saturation": -100
						  },
						  {
							  "gamma": 2.15
						  },
						  {
							  "lightness": 12
						  }
					  ]
				  },
				  {
					  "featureType": "road",
					  "elementType": "labels.text.fill",
					  "stylers": [
						  {
							  "visibility": "on"
						  },
						  {
							  "lightness": 24
						  }
					  ]
				  },
				  {
					  "featureType": "road",
					  "elementType": "geometry",
					  "stylers": [
						  {
							  "lightness": 57
						  }
					  ]
				  }
			  ]
				  
	  var yourLatitude = -12.011474;
	  var yourLongitude = -77.101819;


	  var myOptions = {
		zoom: 14,
		center: new google.maps.LatLng(yourLatitude,yourLongitude),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: false,
		panControl: false,
		zoomControl: false,
		scaleControl: false,
		streetViewControl: false,
		styles: mapDark
	  };
	  
	  var map = new google.maps.Map(document.getElementById('google-map'), myOptions);
	  
	  var image = 'scr="https//maps.googleapis.com/maps/api/js?key=AIzaSyCsgmSrrJIH1g-ejC6eP9WxJvT1NUQV75c&callback=initMap"';
	  var myLatLng = new google.maps.LatLng(yourLatitude,yourLongitude);
	  var myLocation = new google.maps.Marker({
		  position: myLatLng,
		  map: map,
		  icon: image
	  });
	
	}
	
	google.maps.event.addDomListener(window, 'load', mapInitialize);
	
});