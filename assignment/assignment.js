var dataset = 'https://raw.githubusercontent.com/cambridgegis/cambridgegis_data/master/Landmark/Public_Art/LANDMARK_PublicArt.geojson';
var myData;

$(document).ready(function() {
$.ajax(dataset).done(function(result) {
  var parsed = JSON.parse(result);
  myData = _.chain(parsed).value();
var layer = L.geoJson(myData, {
    }).addTo(map);
});
});

// Global Variables

var myRectangle = [];

// Initialize Leaflet Draw

var drawControl = new L.Control.Draw({
  draw: {
    polyline: false,
    polygon: false,
    circle: false,
    marker: false,
    rectangle: true,
  }
});

map.addControl(drawControl);

// Run every time Leaflet draw creates a new layer

map.on('draw:created', function (e) {
    var type = e.layerType; // The type of shape
    var layer = e.layer; // The Leaflet layer for the shape
    var id = L.stamp(layer); // The unique Leaflet ID for the layer
    var shape = layer.toGeoJSON();

var drawLayer = [];

drawLayer.push(layer);
map.addLayer(layer);

myRectangle = {
    "type": "FeatureCollection",
    "features": [shape]
};

console.log(myData);
console.log(myRectangle);
var Within = turf.within(myData, myRectangle);
console.log(Within);



_.each(Within.features, function(element){
  var template = '<div  class = "shape" id= "shape-'+element.id+'" data-id = "'+element.id+'"> <p> ArtID: '+element.properties.ArtID+'</p> <p> First Name: '+element.properties.First_Name+'</p>  </div>';
  $('#shapes').append(template);

  $('[data-id = "'+element.id+'"]').on('click',function(){
    var clickId = $(this).data('id');
    var point =_.filter(Within.features,function(ob) { return ob.id === clickId;});
    console.log(clickId);
    console.log(point);
    L.geoJson(point, {
          pointToLayer: function (feature, latlng) {
              return L.circleMarker(latlng);
          }
      }).addTo(map);

  });
  });

});
