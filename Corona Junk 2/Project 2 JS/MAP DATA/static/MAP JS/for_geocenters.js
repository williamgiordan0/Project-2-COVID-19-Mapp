//Creates US Map
var myMap = L.map("map", {
  center: [38, -97],
  zoom: 5
});




///////////////////////////////////////////////////////////////////////////////////////////
<script src='https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.js'></script>
<link href='https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css' rel='stylesheet' />
                   
</script>

////////////////////////////////////////////////////////////////////////////////////////////
//
// These three columns should be .csv data.
// The rest of the program should work.
//

var csv_col1 = [ "WI", "WV", "VT", "TX", "SD", "RI", "OR", "NY", "NH", "NE", "KS", "MS", "IL", "DE", "CT", "AR", "IN", "MS", "FL", "NV", "ME", "MI",
 "GA", "HI", "AK", "TN", "VI", "NJ", "KY", "ND", "MN", "OK", "MT", "WA", "UT", "CO", "OH", "AL", "IA", "NM", "SC", "PA", "AZ", "MD", "MA", "CA", "ID", 
 "WY", "NC", "LA", "D.C."];
  

var csv_col2 = [44.5, 39, 44, 31, 44.5, 41.700001, 44, 43, 44, 41.5, 38.5, 33, 40, 39, 41.599998, 34.799999, 40.273502, 38.573936, 27.994402, 39.876019,
  45.367584, 44.182205, 33.247875, 19.741755, 66.160507, 35.860119, 37.926868, 39.833851, 37.839333, 47.650589, 46.39241, 36.084621, 46.96526, 47.751076, 
  39.41922, 39.113014, 40.367474, 32.31823, 42.032974, 34.307144, 33.836082, 41.203323, 34.048927, 39.045753, 42.407211, 36.778259, 44.068203, 43.07597
  35.782169, 30.39183, 38.9072];

var csv_col3 = [-89.5, -80.5, -72.699997, -100, -100, -71.5, -120.5, -75, -71.5, -100, -98, -90, -89, -75.5, -72.699997, -92.199997, -86.126976
  -92.60376, -81.760254, -117.224121, -68.972168, -84.506836, -83.441162, -155.844437, -153.369141, -86.660156, -78.024902, -74.871826, -84.27002, -100.437012
  -94.63623, -96.921387, -109.533691, -120.740135, -111.950684, -105.358887, -82.996216, -86.902298, -93.581543, -106.018066, -81.163727, -77.194527, -111.093735
  -76.641273, -71.382439, -119.417931, -114.742043, -107.290283, -80.793457
  -92.329102, -77.0369];
  

var statename = [Wisconsin, West Virginia, Vermont, Texas, South Dakota, Rhode Island, Oregon, New York, New Hampshire, Nebraska, Kansas, Mississippi, Illinois,
Delaware, Connecticut, Arkansas, Indiana, Missouri, Florida, Nevada, Maine, Michigan, Georgia, Hawaii, Alaska, Tennessee, Virginia, New Jersey, Kentucky,
North Dakota, Minnesota, Oklahoma, Montana, Washington State, Utah, Colorado, Ohio, Alabama, Iowa, New Mexico, South Carolina, Pennsylvania, Arizona, 
Maryland, Massachusetts, California, Idaho, Wyoming, North Carolina, Louisiana, District of Columbia];

var statelat = [44.5, 39, 44, 31, 44.5, 41.700001, 44, 43, 44, 41.5, 38.5, 33, 40, 39, 41.599998, 34.799999, 40.273502, 38.573936, 27.994402, 39.876019,
  45.367584, 44.182205, 33.247875, 19.741755, 66.160507, 35.860119, 37.926868, 39.833851, 37.839333, 47.650589, 46.39241, 36.084621, 46.96526, 47.751076, 
  39.41922, 39.113014, 40.367474, 32.31823, 42.032974, 34.307144, 33.836082, 41.203323, 34.048927, 39.045753, 42.407211, 36.778259, 44.068203, 43.07597
  35.782169, 30.39183];

var statelong  = [-89.5, -80.5, -72.699997, -100, -100, -71.5, -120.5, -75, -71.5, -100, -98, -90, -89, -75.5, -72.699997, -92.199997, -86.126976
-92.60376, -81.760254, -117.224121, -68.972168, -84.506836, -83.441162, -155.844437, -153.369141, -86.660156, -78.024902, -74.871826, -84.27002, -100.437012
-94.63623, -96.921387, -109.533691, -120.740135, -111.950684, -105.358887, -82.996216, -86.902298, -93.581543, -106.018066, -81.163727, -77.194527, -111.093735
-76.641273, -71.382439, -119.417931, -114.742043, -107.290283, -80.793457
-92.329102];

for (i = 0; i < csv_col1.length; i++) {
    statename.push(csv_col1[i])
    statelong.push(csv_col2[i])
    statelat.push(csv_col3[i])
};
console.log(statelat);

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.light",
  accessToken: API_KEY
}).addTo(myMap);

for (i = 0; i < csv_col1.length; i++)
L.marker([statelong[i], statelat[i]]).addTo(myMap)
.bindPopup(`State name: ${statename[i]}`);