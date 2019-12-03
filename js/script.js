var vehicles = [
{
	name : "Toyota Yaris",
	type: "small",
	rent: 129,
	fuel: 8.5,
	minDays: 1,
	maxDays: 10,
	minPeople: 1,
	maxPeople: 2,
	engine: "2000cc engine",
	transmission: "Automatic",
	fuelType: "Petrol",
	features: ["5-Star ANCAP Safety Rating", "Bluetooth Handsfree Phone", "Cruise Control"],
	mainImg: "small1.jpg",
	carouselImg: []
},
{
	name : "Toyota Corolla",
	type: "small",
	rent: 129,
	fuel: 8.5,
	minDays: 1,
	maxDays: 10,
	minPeople: 1,
	maxPeople: 2,
	engine: "1800cc engine",
	transmission: "Automatic",
	fuelType: "Petrol",
	features: ["4-Star ANCAP Safety Rating", "Vehicle Stability Control", "Anti-lock Braking System"],
	mainImg: "small2.jpg",
	carouselImg: []
},
{
	name : "Toyota CHR",
	type: "small",
	rent: 129,
	fuel: 8.5,
	minDays: 1,
	maxDays: 10,
	minPeople: 1,
	maxPeople: 2,
	engine: "1200cc engine",
	transmission: "Automatic",
	fuelType: "Petrol",
	features: ["5-Star ANCAP Safety Rating", "Bluetooth Handsfree Phone", "Blind Spot Warning System"],
	mainImg: "small3.jpg",
	carouselImg: []
},
{
	name : "Toyota Land Cruiser Prado",
	type: "large",
	rent: 144,
	fuel: 9.7,
	minDays: 3,
	maxDays: 10,
	minPeople: 1,
	maxPeople: 5,
	engine: "2800cc engine",
	transmission: "Automatic",
	fuelType: "Diesel",
	features: ["5-Star ANCAP Safety Rating", "Satellite Navigation", "Front Seat Warmers"],
	mainImg: "large1.jpg",
	carouselImg: []
},
{
	name : "Toyota Aurion",
	type: "large",
	rent: 144,
	fuel: 9.7,
	minDays: 3,
	maxDays: 10,
	minPeople: 1,
	maxPeople: 5,
	engine: "3500cc engine",
	transmission: "Automatic",
	fuelType: "Petrol",
	features: ["5-Star ANCAP Safety Rating", "Bluetooth Handsfree Phone", "Cruise Control"],
	mainImg: "large2.jpg",
	carouselImg: []
},
{
	name : "Hyundai Tucson",
	type: "large",
	rent: 144,
	fuel: 9.7,
	minDays: 3,
	maxDays: 10,
	minPeople: 1,
	maxPeople: 5,
	engine: "2000cc engine",
	transmission: "Automatic",
	fuelType: "Petrol",
	features: ["Reversing Camera", "Bluetooth Handsfree Phone", "Touch Screen Audio"],
	mainImg: "large3.jpg",
	carouselImg: []
},
{
	name : "Hyundai Santa Fe",
	type: "large",
	rent: 144,
	fuel: 9.7,
	minDays: 3,
	maxDays: 10,
	minPeople: 1,
	maxPeople: 5,
	engine: "2200cc engine",
	transmission: "Automatic",
	fuelType: "Diesel",
	features: ["5-Star ANCAP Safety Rating", "Wireless Smartphone Charging", "Blind Spot Monitoring"],
	mainImg: "large4.jpg",
	carouselImg: []
},
{
	name : "4 Berth Ranger",
	type: "motorhome",
	rent: 200,
	fuel: 17,
	minDays: 2,
	maxDays: 15,
	minPeople: 2,
	maxPeople: 6,
	engine: "2300cc engine",
	transmission: "Automatic",
	fuelType: "Diesel",
	features: ["Certified Self-Contained", "Linen & Cutlery Supplied", "Anti-lock Braking System"],
	mainImg: "home1.jpg",
	carouselImg: []
},
{
	name : "6 Berth Mitsubishi Canter",
	type: "motorhome",
	rent: 200,
	fuel: 17,
	minDays: 2,
	maxDays: 15,
	minPeople: 2,
	maxPeople: 6,
	engine: "4000cc engine",
	transmission: "Automatic",
	fuelType: "Diesel",
	features: ["Certified Self-Contained", "Linen & Cutlery Supplied", "Huge Living Space"],
	mainImg: "home2.jpg",
	carouselImg: []
},
{
	name : "6 Berth Imala Deluxe",
	type: "motorhome",
	rent: 200,
	fuel: 17,
	minDays: 2,
	maxDays: 15,
	minPeople: 2,
	maxPeople: 6,
	engine: "2300cc engine",
	transmission: "Automatic",
	fuelType: "Diesel",
	features: ["Certified Self-Contained", "Linen & Cutlery Supplied", "Premium Kitchen Appliances"],
	mainImg: "home3.jpg",
	carouselImg: []
},
{
	name : "BMW R 1200GS",
	type: "motorbike",
	rent: 109,
	fuel: 3.7,
	minDays: 1,
	maxDays: 5,
	minPeople: 1,
	maxPeople: 1,
	engine: "1170cc engine",
	transmission: "Manual",
	fuelType: "Petrol",
	features: ["Electronic Dashboard", "Cruise Control", "Windscreen"],
	mainImg: "bike1.jpg",
	carouselImg: []
},
{
	name : "BMW F 800GS Adventure",
	type: "motorbike",
	rent: 109,
	fuel: 3.7,
	minDays: 1,
	maxDays: 5,
	minPeople: 1,
	maxPeople: 1,
	engine: "798cc engine",
	transmission: "Manual",
	fuelType: "Petrol",
	features: ["Electronic Dashboard", "Cruise Control", "Windscreen"],
	mainImg: "bike2.jpg",
	carouselImg: []
},
{
	name : "BMW F 800GS",
	type: "motorbike",
	rent: 109,
	fuel: 3.7,
	minDays: 1,
	maxDays: 5,
	minPeople: 1,
	maxPeople: 1,
	engine: "798cc engine",
	transmission: "Manual",
	fuelType: "Petrol",
	features: ["Electronic Dashboard", "Cruise Control", "Windscreen"],
	mainImg: "bike3.jpg",
	carouselImg: []
}
];

var startDate, endDate, noDays, waypts, stopovers, startPt, endPt;
var numberOfPeople = 1;

// add acript tag with api key
var myKey = JSON.parse(apiKey);
var script = document.createElement('script');
script.src='https://maps.googleapis.com/maps/api/js?key='+ myKey[0].key + '&callback=initMap';
document.getElementsByTagName('body')[0].appendChild(script);


function initMap() {
	var directionsService = new google.maps.DirectionsService;
	var directionsRenderer = new google.maps.DirectionsRenderer;
	var map = new google.maps.Map(document.getElementById('map-container'), {
		zoom: 6,
		center: {lat: -41.3, lng: 173.6}
	});
	directionsRenderer.setMap(map);

	$(".view-map").click(function(){
		calculateAndDisplayRoute(directionsService, directionsRenderer);

	});
}

function calculateAndDisplayRoute(directionsService, directionsRenderer) {
	waypts = [];
	var checkboxArray = document.getElementById('waypoints');
	for (var i = 0; i < checkboxArray.length; i++) {
		if (checkboxArray.options[i].selected) {
			waypts.push({
				location: checkboxArray[i].value,
				stopover: true
			});
		}
	}

	directionsService.route({
		origin: document.getElementById('start').value,
		destination: document.getElementById('end').value,
		waypoints: waypts,
		optimizeWaypoints: true,
		travelMode: 'DRIVING'
	}, function(response, status) {
		if (status === 'OK') {
			directionsRenderer.setDirections(response);
			var route = response.routes[0];
      // var summaryPanel = document.getElementById('directions-panel');
      // summaryPanel.innerHTML = '';
      // For each route, display summary information.
      for (var i = 0; i < route.legs.length; i++) {
      //   var routeSegment = i + 1;
      //   summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
      //   '</b><br>';
        console.log(route.legs[i].start_address);
        console.log(route.legs[i].end_address) ;
        console.log(route.legs[i].distance.text);
      //   summaryPanel.innerHTML += route.legs[i].duration.text + '<br><br>';
      //   var distance = parseFloat(route.legs[i].distance.text);
      }
  } else {
  	window.alert('Directions request failed due to ' + status);
  	$(".map-wrapper").fadeOut();
  }
});
}

// https://github.com/nolimits4web/Swiper/blob/master/demos/240-effect-coverflow.html
// print vehciles that match the description
function printVehicles(){
	for(var i = 0; i < vehicles.length; i++){
		if(noDays > vehicles[i].minDays 
		&& noDays < vehicles[i].maxDays
		&& numberOfPeople > vehicles[i].minPeople 
		&& numberOfPeople < vehicles[i].maxPeople){
			if(vehicles[i].type === "small"){
				var small = "";
				small += '<h2 class="vehicle-type-heading">Small Cars</h2><div class="swiper-container"><div class="swiper-wrapper">';
				+ '<div class="swiper-slide"></div>';

	  //  </div>
	  //   <!-- Add Pagination -->
	  //   <div class="swiper-pagination"></div>
	  // </div>
				document.getElementById("small-cars-container").innerHTML = small;
			}
		}
	}
}


// get location values
document.getElementById("locations-next").addEventListener("click", function(){
	startPt = $('#start option:selected').text();
	endPt = $('#end option:selected').text();
	stopovers = [];
	var checkedArray = document.getElementById('waypoints');
	for (var i = 0; i < checkedArray.length; i++) {
		if (checkedArray.options[i].selected) {
			stopovers.push({
				location: checkedArray[i].value,
				name: checkedArray[i].innerHTML,
				stopover: true
			});
		}
	}
	// console.log(startPt, endPt)
	// for(var j = 0; j<stopovers.length; j++){
	// 	console.log(stopovers[j].name)
	// }
});


// date picker
var oneDay = 86400000;
$("#from").datepicker({
	dateFormat: 'yy-mm-dd',
	changeMonth: true,
	minDate: new Date(),
	maxDate: '+1y',
	onSelect: function(date){
		var selectedDate = new Date(date);
		var stDate = new Date(selectedDate.getTime() + oneDay);
	    //Set Minimum Date of EndDatePicker After Selected Date of StartDatePicker
	    $("#to").datepicker("option", "minDate", stDate);

	    var enDate = new Date(selectedDate.getTime() + 15 * oneDay);
	    $("#to").datepicker("option", "maxDate", enDate);

	    // print number of days
	    startDate = $('#from').datepicker('getDate');
	    endDate = $('#to').datepicker('getDate');
	    noDays = (endDate - startDate)/oneDay;
	    if(startDate != null && endDate != null){
	    	document.getElementById("numberOfDays").innerHTML = "You have selected " + noDays + " days";
	    }
	}
});

$("#to").datepicker({
	dateFormat: 'yy-mm-dd',
	changeMonth: true,
	onSelect: function(){ // find number of days of journey
		startDate = $('#from').datepicker('getDate');
		endDate = $('#to').datepicker('getDate');
		noDays = (endDate - startDate)/oneDay;
		if(startDate != null && endDate != null){
			document.getElementById("numberOfDays").innerHTML = "You have selected " + noDays + " days";
		}
	}
});







// show number of people
$("#minus-people").click(function(){
	if(numberOfPeople > 1){
		numberOfPeople --;
		$("#people-number").text(numberOfPeople);
	}
});

$("#add-people").click(function(){
	if(numberOfPeople < 6){
		numberOfPeople ++;
		$("#people-number").text(numberOfPeople);
	}
});


// jquery hide and show
// NEXT
$(".locations-wrapper").hide();
$(".dates-wrapper").hide();
$(".people-wrapper").hide();
$(".map-wrapper").hide();
$(".vehicles-wrapper").hide();


$(".home-btn").click(function(){
	$(".home-wrapper").fadeOut();
	$(".locations-wrapper").fadeIn();
});

$("#locations-next").click(function(){
	if((start.value != end.value) || (start.value == end.value && waypoints.value != "")){
		$(".locations-wrapper").fadeOut();
		$(".dates-wrapper").fadeIn();
	}
	else{
		$(".not-valid-locations").show();
	}
});

$("#dates-next").click(function(){
	if(from.value != "" && to.value != ""){
		$(".dates-wrapper").fadeOut();
		$(".people-wrapper").fadeIn();
		// console.log(from.value, to.value)
	}
	else{
		$(".not-valid-date").show();
	}
});

$("#people-next").click(function(){
	$(".people-wrapper").fadeOut();
	$(".vehicles-wrapper").fadeIn();
	printVehicles();
});

// open and close map
$(".view-map").click(function(){
	$(".map-wrapper").fadeIn();
});

$("#close-map").click(function(){
	$(".map-wrapper").fadeOut();
});



// BACK
$("#dates-back").click(function(){
	$(".dates-wrapper").fadeOut();
	$(".locations-wrapper").fadeIn();
});

$("#people-back").click(function(){
	$(".people-wrapper").fadeOut();
	$(".dates-wrapper").fadeIn();
});


















