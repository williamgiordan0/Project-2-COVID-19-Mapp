//US Map
var myMap = L.map("map", {
  center: [38, -97],
  zoom: 5,
});

myMap.scrollWheelZoom.disable();
//NJ Map
// var myMap = L.map("map", {
//   center: [40.15, -74.4],
//   zoom: 8
// });

//Europe Map
// var myMap = L.map("map", {
//   center: [56, 23.1],
//   zoom: 4
// });

// Asia Map
// var myMap = L.map("map", {
//   center: [19, 88],
//   zoom: 4
// });

// North-East Map
// var myMap = L.map("map", {
//   center: [43, -75],
//   zoom: 6
// });


// Adding a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.light",
  accessToken: API_KEY
}).addTo(myMap);

var Circle1 = L.circleMarker([42, -100], {color: "blue", radius: 20});
var Circle2 = L.circleMarker([42, -100], {color: "blue", radius: 40});
var Circle3 = L.circleMarker([42, -100], {color: "blue", radius: 60});
var Circle4 = L.circleMarker([42, -100], {color: "blue", radius: 80});
var Circle5 = L.circleMarker([42, -100], {color: "orange", radius: 100});
var Circle6 = L.circleMarker([42, -100], {color: "orange", radius: 120});
var Circle7 = L.circleMarker([42, -100], {color: "orange", radius: 140});

circles = [Circle1, Circle2, Circle3, Circle4, Circle5, Circle6, Circle7];

Circle1.addTo(myMap);

producer = function( {label, value, map, exclamation} ) {

  // Removal loop
  for (var j = 0; j < circles.length; j++) {
    if (circles[j]) {myMap.removeLayer(circles[j])};
  }
  //Addition loop
  for (var i = 1; i < 8; i++) {
    if (value == i) {circles[i-1].addTo(myMap)};
  }
};

L.control.timelineSlider({
  timelineItems: ["March 23", "March 24", "March 25", "March 26", "March 27", "March 28", "March 29"], 
  changeMap: producer,
  extraChangeMapParams: {exclamation: "Hello World!"} })
.addTo(myMap);  

