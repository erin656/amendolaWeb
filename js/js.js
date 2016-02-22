  var neighborhood = [40.847142,-73.841214];
  var pelhambaypark = [40.858194,-73.812354];
  var plaza = [-73.826424,40.852924]
  var myZoom = 13;

      var mapData = [
    {
      name: "Under Elevated",
      coord: [-73.826424,40.852924]
      //Description: "The intersection of Westchester Avenue and Amendola Place is dark and unattractive. As a result, people don't walk here without an immediate destination and businesses are depressed."
      //Imagery
    },
    {
      name: "Westchester Overpass",
      coord: [-73.987513, 40.706913],
      icon_url: 'css/station.jpg'
    },
    {
      name: "Amendola Plaza",
      coord: [40.852583,-73.827079]
      //Imagery
    }
  ]

//Satelite map baselayer
// var layer = L.tileLayer('https://api.mapbox.com/styles/v1/eng250/cikx4cpkq00eu98kmnj4ggss1.html?title=true&access_token=pk.eyJ1IjoiZW5nMjUwIiwiYSI6ImNpa3gzM25xYjAwbjl1bWtzMmM4aWx2YmMifQ.J8LDoMGe0nvOwf_rrGauNA#16/40.852524725325026/-73.82704737265468/0', {
//     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
//     maxZoom: 18,
//     minZoom:14
//   });
var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});

  var map = L.map('map').setView([40.852583,-73.827079],16)
  

  map.addLayer(layer)
  
  mapData.forEach(function(element) {
    var marker = L.marker(element.coord).addTo(map);
    marker.bindPopup("<img src=" + element.icon_url + element.name)
  });


// marker1.bindPopup( "<img src=" + icon_url + "/> Current temperature in " + location + " is: " + temp_f)
// marker1.bindPopup( "<img src=" + icon_url);
//   var panOptions = {
//     animate: true,
//     duration: 2
//   }
//    