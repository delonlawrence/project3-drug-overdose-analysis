// Set up function to initialize map of Connecticut on page open
function createMap() {
    // Set up variable for map to be centered on Connecticut, US
    let mapConn = L.map('map-id').setView([41.6032, -73.0877], 8.5);
    var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap',
      maxZoom: 19
  });
  osm.addTo(mapConn);
// script.js
const url = "/api/data";

  d3.json(url)
    .then((data) => {
    // console.log("Raw data:", data); // Log the raw data from the API

    let death_counties = data.map(function (record) {
      // Extract city, state, latitude, and longitude using regular expressions
      const cityStateRegex = /([^,]+),\s*([^(\s]+)\s*\(([^,]+),\s*([^)]+)\)/; // Matches city, state, (lat, long)
      const match = record.DeathCityGeo.match(cityStateRegex);

      // console.log("Record:", record.DeathCityGeo); // Log the current record's "DeathCityGeo" value

      if (match) {
        const city = match[1].trim();
        const state = match[2].trim();
        const latitude = parseFloat(match[3].trim());
        const longitude = parseFloat(match[4].trim());

        // Return an object containing extracted data
        // return { city, state, latitude, longitude };
        return {latitude, longitude};
      }

      // Return null if the format doesn't match
      return null;
    });

    // Filter out null values (entries with incorrect format)
    death_counties = death_counties.filter(item => item !== null);

    var heat = L.heatLayer(
      death_counties.map(item => [item.latitude, item.longitude, 1]),
      

    {radius: 25}).addTo(mapConn);
    // Add base map layer


    // Do something with the extracted data
    // console.log("Extracted data:", death_counties);
  })
  .catch((error) => {
    console.error('Error fetching JSON data:', error);
  });


    // Add base map layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap',
        maxZoom: 19
    }).addTo(mapConn);
    let marker = L.marker([41.1408, -73.2613], {
        draggable: true,
        title: "Fairfield"
    }).addTo(mapConn);
    marker.bindPopup('Fairfield');

    let marker2 = L.marker([41.7658, -72.6734], {
        draggable: true,
        title: "Hartford"
    }).addTo(mapConn);
    marker2.bindPopup('Hartford');

    let marker3 = L.marker([41.3083, -72.9279], {
        draggable: true,
        title: "New Haven"
    }).addTo(mapConn);
    marker3.bindPopup('New Haven');

    let marker4 = L.marker([41.3557, -72.0995], {
        draggable: true,
        title: "New London"
    }).addTo(mapConn);
    marker4.bindPopup('New London');

    let marker5 = L.marker([41.7473, -73.1887], {
        draggable: true,
        title: "Litchfield"
    }).addTo(mapConn);
    marker5.bindPopup('Litchfield');

    let marker6 = L.marker([41.4699, -72.4732], {
        draggable: true,
        title: "Middlesex"
    }).addTo(mapConn);
    marker6.bindPopup('Middlesex');

    let marker7 = L.marker([41.6998, -71.9], {
        draggable: true,
        title: "Windham"
    }).addTo(mapConn);
    marker7.bindPopup('Windham');

    let marker8 = L.marker([41.8715, -72.3687], {
        draggable: true,
        title: "Tolland"
    }).addTo(mapConn);
    marker8.bindPopup('Tolland');

    var pointGeoJSON = {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "coordinates": [
                [
                  -73.49091906802887,
                  42.04610504460416
                ],
                [
                  -73.54829075563241,
                  41.29223566861535
                ],
                [
                  -73.48309565608294,
                  41.21185151526058
                ],
                [
                  -73.72562142640703,
                  41.10189875398913
                ],
                [
                  -73.66042632685752,
                  40.9878247228811
                ],
                [
                  -73.61267084416642,
                  40.95238227318876
                ],
                [
                  -73.40143872162524,
                  40.99766651580779
                ],
                [
                  -73.2032456189948,
                  41.16082499299608
                ],
                [
                  -73.1015412636976,
                  41.154934754510606
                ],
                [
                  -72.9111715730123,
                  41.274598876399864
                ],
                [
                  -72.87727012124657,
                  41.23734991877487
                ],
                [
                  -72.17055524212846,
                  41.27263893452562
                ],
                [
                  -71.92281386383958,
                  41.307908884441645
                ],
                [
                  -71.82110950854236,
                  41.337285942986
                ],
                [
                  -71.82632511650634,
                  41.40578090532341
                ],
                [
                  -71.79242366474061,
                  41.42142677008778
                ],
                [
                  -71.79503146872258,
                  42.02673641657495
                ],
                [
                  -72.6008428991559,
                  42.02673641657495
                ],
                [
                  -72.6373521549036,
                  42.036421486512694
                ],
                [
                  -72.7442721181656,
                  42.036421486512694
                ],
                [
                  -72.76513455002144,
                  42.005424068369734
                ],
                [
                  -72.80946721771508,
                  41.99961037026489
                ],
                [
                  -72.81729062966102,
                  42.03448459058254
                ],
                [
                  -73.48228064506745,
                  42.048041622459124
                ]
              ],
              "type": "LineString"
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "coordinates": [
                [
                  -73.05460079202113,
                  42.02867354861908
                ],
                [
                  -73.05981639998595,
                  41.920103263508565
                ],
                [
                  -72.99983690839957,
                  41.90845975686355
                ],
                [
                  -73.0337383601653,
                  41.72966006607291
                ],
                [
                  -73.09632565573365,
                  41.68682966855266
                ],
                [
                  -73.02852275220135,
                  41.54645799710329
                ],
                [
                  -73.29451875836409,
                  41.43120352183985
                ],
                [
                  -73.52661331276109,
                  41.517175450180105
                ]
              ],
              "type": "LineString"
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "coordinates": [
                [
                  -73.05199298803917,
                  42.02673641657495
                ],
                [
                  -73.04938518405719,
                  42.04223182012433
                ]
              ],
              "type": "LineString"
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "coordinates": [
                [
                  -72.48088391598486,
                  42.020924666279626
                ],
                [
                  -72.47566830802089,
                  41.60498332096344
                ],
                [
                  -72.55129462349828,
                  41.579628858355136
                ],
                [
                  -72.56954925137212,
                  41.63227698894789
                ],
                [
                  -72.83815306151686,
                  41.59328249877575
                ],
                [
                  -72.83554525753487,
                  41.52889005957829
                ],
                [
                  -73.00505251636355,
                  41.51912803235453
                ],
                [
                  -72.9972291044176,
                  41.54450623970277
                ],
                [
                  -73.02852275220135,
                  41.54645799710329
                ]
              ],
              "type": "LineString"
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "coordinates": [
                [
                  -72.47045270005692,
                  41.60498332096344
                ],
                [
                  -72.42351222838131,
                  41.591332155494825
                ],
                [
                  -72.29833763724545,
                  41.59913317505058
                ],
                [
                  -72.16273183018254,
                  41.692671857500386
                ],
                [
                  -72.09492892665104,
                  41.6965663553743
                ],
                [
                  -72.0897133186871,
                  41.846325184101175
                ],
                [
                  -72.15751622221855,
                  41.842439767576934
                ],
                [
                  -72.15751622221855,
                  41.95696035395525
                ],
                [
                  -72.04538065099345,
                  41.95502103817469
                ],
                [
                  -72.04538065099345,
                  42.02673641657495
                ]
              ],
              "type": "LineString"
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "coordinates": [
                [
                  -72.15751622221855,
                  41.68877712381956
                ],
                [
                  -72.01669480719167,
                  41.579628858355136
                ],
                [
                  -71.78720805677663,
                  41.58353019310405
                ]
              ],
              "type": "LineString"
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "coordinates": [
                [
                  -72.55129462349828,
                  41.58353019310405
                ],
                [
                  -72.4887073279308,
                  41.48983311454185
                ],
                [
                  -72.36092493281379,
                  41.49178652139415
                ],
                [
                  -72.36614054077776,
                  41.40773684450542
                ],
                [
                  -72.46523709209298,
                  41.409692724806575
                ],
                [
                  -72.44437466023714,
                  41.258917693770144
                ]
              ],
              "type": "LineString"
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "coordinates": [
                [
                  -72.83815306151686,
                  41.52889005957829
                ],
                [
                  -72.8303296495709,
                  41.42338223820897
                ],
                [
                  -72.71297847038186,
                  41.42729299779617
                ],
                [
                  -72.66603799870539,
                  41.24519356978212
                ]
              ],
              "type": "LineString"
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "coordinates": [
                [
                  -73.29191095438212,
                  41.43511381033596
                ],
                [
                  -73.11979589157144,
                  41.290276292904764
                ],
                [
                  -73.10675687166156,
                  41.152971224055335
                ]
              ],
              "type": "LineString"
            }
          }
        ]
      }
    var geoJSONLayer = L.geoJSON(pointGeoJSON, {
        // Customize the style of the GeoJSON features (in this case, a polygon)
        style: {
            color: "blue",
            fillColor: "blue",
            fillOpacity: 0.2,
        },
    }).addTo(mapConn);


    

};
