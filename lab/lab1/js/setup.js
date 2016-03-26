var map = L.map('map', {
  center: [40.000, -75.1090],
 zoom: 11
});

var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);


// Exercise 1
var point = {
  "type": "Feature",
  "properties": {
    "marker-color": "#0f0"
  },
  "geometry": {
    "type": "Point",
    "coordinates": [-75.16382217407227, 39.95449073417355]
  }
};
var against = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-73.98674011230469,
          40.73971363429379]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-87.71484375,
          41.902277040963696]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-243.621826171875,
          39.93501296038254]
      }
    }
  ]
};

var nearest = turf.nearest(point, against);
nearest.properties['marker-color'] = '#f00';

var resultFeatures = against.features.concat(point);
var result = {
  "type": "FeatureCollection",
  "features": resultFeatures
};

console.log(nearest);

var geojsonMarkerOptions = {
    radius: 8,
    color: "#f00",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8,
  };

layer = L.geoJson(nearest, {
          pointToLayer: function (feature, latlng) {
              return L.circleMarker(latlng, geojsonMarkerOptions);
          }
      }).addTo(map);



//Exercise 2

      var polygons = {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Polygon",
              "coordinates": [[
                [
             -75.20502090454102,
             39.9476478239225
           ],
           [
             -75.20502090454102,
             39.9602803542957
           ],
           [
             -75.18476486206055,
             39.9602803542957
           ],
           [
             -75.18476486206055,
             39.9476478239225
           ],
           [
             -75.20502090454102,
             39.9476478239225
           ]
              ]]
            }
          }, {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Polygon",
              "coordinates": [[
                [
              -75.17961502075194,
              39.942910023503146
            ],
            [
              -75.17961502075194,
              39.95501708352986
            ],
            [
              -75.15867233276367,
              39.95501708352986
            ],
            [
              -75.15867233276367,
              39.942910023503146
            ],
            [
              -75.17961502075194,
              39.942910023503146
            ]
              ]]
            }
          }
        ]
      };
      var points = {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {
              "population": 100
            },
            "geometry": {
              "type": "Point",
              "coordinates": [-75.2010726928711,
          39.95817509460007]
            }
          }, {
            "type": "Feature",
            "properties": {
              "population": 150
            },
            "geometry": {
              "type": "Point",
              "coordinates": [-75.19197463989258,
          39.95501708352986]
            }
          }, {
            "type": "Feature",
            "properties": {
              "population": 50
            },
            "geometry": {
              "type": "Point",
              "coordinates": [-75.19729614257812,
          39.951727333594555]
            }
          }, {
            "type": "Feature",
            "properties": {
              "population": 50
            },
            "geometry": {
              "type": "Point",
              "coordinates": [-75.1710319519043,
          39.952187908111135]
            }
          }, {
            "type": "Feature",
            "properties": {
              "population": 30
            },
            "geometry": {
              "type": "Point",
              "coordinates": [-75.16665458679199,
          39.9450815560893]
            }
          }
        ]
      };

      var averaged = turf.average(
       polygons, points, 'population', 'pop_avg');

      var resultFeatures = points.features.concat(
        averaged.features);
      var result = {
        "type": "FeatureCollection",
        "features": resultFeatures
      };

      var eachFeature = function(feature, layer) {
          layer.bindPopup("Population average: " + feature.properties.pop_avg);
        };

        console.log(averaged);
      var layer2 = L.geoJson(averaged, {
            onEachFeature: eachFeature,
          }).addTo(map);


//Exercise 3

var polygons3 = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        'fill': '#f1625b'
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [
              -75.19712448120117,
              39.98343393295322
            ],
            [
              -75.19712448120117,
              39.997243411922916
            ],
            [
              -75.17274856567383,
              39.997243411922916
            ],
            [
              -75.17274856567383,
              39.98343393295322
            ],
            [
              -75.19712448120117,
              39.98343393295322
            ]
        ]]
      }
    }, {
      "type": "Feature",
      "properties": {
        'fill': '#8dbeb1'
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [
              -75.21669387817383,
              39.994481739481294
            ],
            [
              -75.21669387817383,
              40.00447583427404
            ],
            [
              -75.19918441772461,
              40.00447583427404
            ],
            [
              -75.19918441772461,
              39.994481739481294
            ],
            [
              -75.21669387817383,
              39.994481739481294
            ]
        ]]
      }
    }, {
      "type": "Feature",
      "properties": {
        'fill': '#f4b657'
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [
              -75.19815444946289,
              40.00013647279231
            ],
            [
              -75.19815444946289,
              40.00894640310206
            ],
            [
              -75.17669677734375,
              40.00894640310206
            ],
            [
              -75.17669677734375,
              40.00013647279231
            ],
            [
              -75.19815444946289,
              40.00013647279231
            ]
        ]]
      }
    }
  ]
};
var points3 = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "population": 100
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-75.19317626953125,
          40.00671115528374]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 150
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-75.18407821655273,
          40.00447583427404]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 50
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-75.18974304199219,
          39.991851471423466]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 50
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-75.1823616027832,
          39.98777435575286]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 30
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-75.20965576171875,
          40.00158295726282]
      }
    }
  ]
};


var tagged = turf.tag(points3, polygons3,
                      'fill', 'color');

var myStyle1 = function(feature) {
return {fillColor: '#fff'};
};
var layer3 = L.geoJson(polygons3, {
  style: myStyle1,
}).addTo(map);

var myStyle = function(feature) {
  return {fillColor: feature.properties.color};
};

layer = L.geoJson(tagged, {
      style: myStyle,
      pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng);
      }
}).addTo(map);


//stretch Goal
var point1 = {
  "type": "Feature",
  "properties": {
    "marker-color": '#f00'
  },
  "geometry": {
    "type": "Point",
    "coordinates": [-87.4072265625, 38.376115424036016]
  }
};
var point2 = {
  "type": "Feature",
  "properties": {
    "marker-color": '#0f0'
  },
  "geometry": {
    "type": "Point",
    "coordinates": [-87.5830078125, 38.23818011979866]
  }
};

var bearing = turf.bearing(point1, point2);

console.log(bearing);

var distance = 500;
var units = 'kilometers';

var destination = turf.destination(point1, distance, bearing, units);
destination.properties['marker-color'] = '#f00';

var result4 = {
  "type": "FeatureCollection",
  "features": [point, destination]
};

layer = L.geoJson(result4, {
      pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng);
      }
}).addTo(map);
