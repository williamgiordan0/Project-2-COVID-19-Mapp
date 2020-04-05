//US Map
var myMap = L.map("map", {
    center: [38, -97],
    zoom: 5,
  });
  
  myMap.scrollWheelZoom.disable();
  
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.light",
    accessToken: API_KEY
  }).addTo(myMap);

circleGroup = [];
var file_name = "US_03_24_2020.csv"

function fileChooser(value) {
    if (value == 1) {file_name="US_03_24_2020.csv"};
    if (value == 2) {file_name="US_03_25_2020.csv"};
    if (value == 3) {file_name="US_03_26_2020.csv"};
    if (value == 4) {file_name="US_03_27_2020.csv"};
    if (value == 5) {file_name="US_03_28_2020.csv"};
    if (value == 6) {file_name="US_03_29_2020.csv"};
    if (value == 7) {file_name="US_03_30_2020.csv"};
    if (value == 8) {file_name="US_03_31_2020.csv"};
    if (value == 9) {file_name="US_04_01_2020.csv"};
}

// var data = d3.csvParse("latlng.csv")
function fileReader(file_name) {
d3.csv(`../data/${file_name}`, function(data){

  for (var i = 0; i < circleGroup.length; i++) {
    if (circleGroup[i]) {myMap.removeLayer(circleGroup[i])};
  }
  circleGroup = [];

  // console.log("test")
var cities = data;
// if (error) throw error;
for (var i = 0; i < cities.length; i++){
  cities[i].Lat = +cities[i].Lat;
  cities[i].Lng = +cities[i].Lng;
  cities[i].TotalDeaths = +cities[i].TotalDeaths;
  // Conditionals for cities points
  function getColor (state){
    if (state > 120) {
       color = "red";
     }
     else if (state > 50) {
       color = "orange";
     }
     else if (state < 20 ){
       color = "green";
     }
     else {
       color = "yellow";
     }
     return color};
}

 // Define circle to add to map
 for (var i = 0; i < cities.length; i++){
    circleGroup.push(L.circleMarker([cities[i].Lat, cities[i].Lng], {
      fillOpacity: 0.3,
      color: "white",
      fillColor: getColor(cities[i].TotalDeaths),
      radius: Math.max(5,Math.sqrt(cities[i].TotalCases)/1.5)
    }).bindPopup("<h1>" + cities[i].State + "<h1> <hr> <h3> Total Cases: " + cities[i].TotalCases + "</h3> <hr> <h3> Total Deaths: " + cities[i].TotalDeaths + 
    "</h3> <hr> <h2> Date: " + cities[i].Date + "</h2>"  ))
  }
  for (var i = 0; i < circleGroup.length; i++){
    circleGroup[i].addTo(myMap);
  }   
})}

fileReader(file_name);
     
  producer = function( {label, value, map, exclamation} ) {
  fileChooser(value);
  fileReader(file_name);
}
  
  L.control.timelineSlider({
    timelineItems: ["March 24", "March 25", "March 26", "March 27", 
    "March 28", "March 29", "March 30", "March 31", "April 1"], 
    changeMap: producer,
    extraChangeMapParams: {exclamation: "Hello World!"} })
  .addTo(myMap);  
  
  