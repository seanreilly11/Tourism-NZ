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

// for(var i = 0; i<vehicles.length; i++){
// 	document.write("<h2>"+vehicles[i].name+"</h2><img src='images/"+vehicles[i].mainImg+"'>")
// }


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
		console.log(selectedDate)
	     //Set Minimum Date of EndDatePicker After Selected Date of StartDatePicker
	     $("#to").datepicker("option", "minDate", stDate);

	     var enDate = new Date(selectedDate.getTime() + 15 * oneDay);
	     $("#to").datepicker("option", "maxDate", enDate);
	 }
});

$("#to").datepicker({
	dateFormat: 'yy-mm-dd',
	changeMonth: true,
	onSelect: function(){ // find number of days of journey
		var start = $('#from').datepicker('getDate');
		var end = $('#to').datepicker('getDate');
		var noDays = (end - start)/oneDay;
		document.getElementById("numberOfDays").innerHTML = "You have selected " + noDays + " days"
	}
});























