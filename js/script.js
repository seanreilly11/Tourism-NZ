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
	mainImg: "small1",
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
	mainImg: "small2",
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
	mainImg: "small3",
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
	mainImg: "large1",
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
	mainImg: "large2",
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
	mainImg: "large3",
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
	mainImg: "large4",
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
	mainImg: "home1",
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
	mainImg: "home2",
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
	mainImg: "home3",
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
	mainImg: "bike1",
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
	mainImg: "bike2",
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
	mainImg: "bike3",
	carouselImg: []
}
];

var startDate, endDate, noDays, waypts, stopovers, startPt, endPt, totalPrice, totalDistance, startPtCode, endPtCode;
var numberOfPeople = 1;

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
	$("#locations-next").click(function(){
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
			var distances = [];
		    // For each route, display summary information.
		    for (var i = 0; i < route.legs.length; i++) {
		    	distances.push(route.legs[i].distance.text);
			    //   summaryPanel.innerHTML += route.legs[i].duration.text + '<br><br>';
			    //   var distance = parseFloat(route.legs[i].distance.text);
			}
			calculateTotalDistance(distances);
		} else {
			window.alert('Directions request failed due to ' + status);
			$(".map-wrapper").fadeOut();
		}
	});
}

// print vehciles that match the description
function printVehicles(){
	for(var i = 0; i < vehicles.length; i++){
		var card = "";
		if(noDays >= vehicles[i].minDays && noDays <= vehicles[i].maxDays && numberOfPeople >= vehicles[i].minPeople && numberOfPeople <= vehicles[i].maxPeople){
			totalPrice = vehicles[i].rent * noDays;

			card += "<div class='card' id='"+vehicles[i].mainImg+"'><img src='images/"+vehicles[i].mainImg+".jpg' class='card-img-top' alt='"+vehicles[i].name+"'>"
			+ "<div class='card-body'><h3 class='card-title text'>"+vehicles[i].name+"</h3>"
			+ "<ul class='card-list'>"
			+ "<li class='card-list-item'><i class='fas fa-user text-16'></i><span class='card-list-text text-16'>"+vehicles[i].minPeople + "-" + vehicles[i].maxPeople+"</span></li>"
			+ "<li class='card-list-item'><i class='fas fa-gas-pump text-16'></i><span class='card-list-text text-16'>"+vehicles[i].fuel + "/100km</span></li></ul>"
			+ "<div class='card-foot'><ul class='card-pricing'>"
			+ "<li class='card-price card-price-total accent-colour text-2 text'>$"+totalPrice+"</li>"
			+ "<li class='card-price text-16'>$"+vehicles[i].rent+"/day</li></ul>"
			+ "<button class='btn btn-success btn-book text-16'>BOOK NOW</button>"
			+ "</div></div></div>";

			if(vehicles[i].type === "small"){
				document.getElementById("small-cars-display").innerHTML += card;
				$("#small-cars-container").show();
			}
			if(vehicles[i].type === "large"){
				document.getElementById("large-cars-display").innerHTML += card;
				$("#large-cars-container").show();

			}
			if(vehicles[i].type === "motorhome"){
				document.getElementById("motorhome-display").innerHTML += card;
				$("#motorhome-container").show();
			}
			if(vehicles[i].type === "motorbike"){
				document.getElementById("motorbike-display").innerHTML += card;
				$("#motorbike-container").show();
			}
		}
		if(card == ""){
			document.getElementById("no-results").innerHTML = "Sorry, no vehicles are  available for you search. Please try another search."
			$("#no-results-container").show();
		}
	}
	// print details of journey
	var extraStops = stopovers.length-1;
	extraStops = extraStops.toString();
	var jDates = from.value + ' - ' + to.value;
	document.getElementById("journey-details-dates").innerHTML = jDates;
	var jLocs = "";
	if(stopovers.length > 1){
		jLocs = startPtCode + ' > ' + stopovers[0].short + ' <sup>+' + extraStops + '</sup> > ' + endPtCode;
	}
	else if(stopovers.length = 1){
		jLocs = startPtCode + ' > ' + stopovers[0].short + ' > ' + endPtCode;
	}
	document.getElementById("journey-details-locations").innerHTML = jLocs;

	document.getElementById("pick-up-point").innerHTML = startPt;

	var stopoverNames = [];
	for(var s = 0; s < stopovers.length; s++){
		stopoverNames.push(stopovers[s].name);
	}

	document.getElementById("stopover-points").innerHTML = stopoverNames.join(", ");

	document.getElementById("drop-off-point").innerHTML = endPt;


}

// calculate total distance
function calculateTotalDistance(distances){
	totalDistance = 0;
	for(var i = 0; i < distances.length; i++){
		var leg = "";
		var distance = distances[i];
		if(distance.includes(",")){
			leg = distance.substr(0,distance.indexOf(","));
			leg += distance.substr(distance.indexOf(",")+1, distance.indexOf(" "));
			leg = parseInt(leg);
			totalDistance += leg;
		}
		else{
			leg = distance;
			leg = parseInt(leg);
			totalDistance += leg;
		}
	}
}


// get location values
document.getElementById("locations-next").addEventListener("click", function(){
	startPt = $('#start option:selected').text();
	startPtCode = $('#start option:selected').attr("data-short");
	endPt = $('#end option:selected').text();
	endPtCode = $('#end option:selected').attr("data-short");
	stopovers = [];
	var checkedArray = document.getElementById('waypoints');
	for (var i = 0; i < checkedArray.length; i++) {
		if (checkedArray.options[i].selected) {
			stopovers.push({
				location: checkedArray[i].value,
				name: checkedArray[i].innerHTML,
				short: checkedArray[i].getAttribute("data-short"),
				stopover: true
			});
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

// add acript tag with api key
var myKey = JSON.parse(apiKey);
var script = document.createElement('script');
script.src='https://maps.googleapis.com/maps/api/js?key='+ myKey[0].key + '&callback=initMap';
document.getElementsByTagName('body')[0].appendChild(script);

// jquery hide and show
// NEXT
$(".locations-wrapper").hide();
$(".dates-wrapper").hide();
$(".people-wrapper").hide();
$(".map-wrapper").hide();
// $(".vehicles-wrapper").hide();
$("#small-cars-container").hide();
$("#large-cars-container").hide();
$("#motorhome-container").hide();
$("#motorbike-container").hide();
$("#no-results-container").hide();



$(".btn-home").click(function(){
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

$("#edit-dates").click(function(){
	$(".vehicles-wrapper").fadeOut();
	$(".dates-wrapper").fadeIn();
});

$("#expand-details").click(function(){
	$(".journey-details-dropdown").slideToggle();
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


// date picker
var oneDay = 86400000;
$("#from").datepicker({
	dateFormat: 'mm-dd-yy',
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
	dateFormat: 'mm-dd-yy',
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

// swiper js

















