
function initMap() {
  let denver = {lat:39.731009, lng: -104.999619};
  let map1 = new google.maps.Map(document.getElementById('map-diversity'), {
    zoom: 13,
    center: denver,
    disableDefaultUI: true,
    scrollwheel: false
  });

  let map2 = new google.maps.Map(document.getElementById('map-population'), {
    zoom: 13,
    center: denver,
    disableDefaultUI: true,
    scrollwheel: false
  });

  let racelayer = new google.maps.FusionTablesLayer({
    query: {
      select: 'geometry',
      from: '1rUSVXaP8YJTkoYqE9ptzZGXydvig4Zvgs7Vnufy1'
    },
    styles: [{
      where: "'PCT_WHITE' <= 1",
      polygonOptions: {
        fillColor: '#FFFFFF',
        fillOpacity: 0.1
      }
    },{
      where: "'PCT_WHITE' < 40 AND 'PCT_WHITE' > 1 ",
      polygonOptions: {
        fillColor: '#0023F5',
        fillOpacity: 0.3
      }
    },{
      where: "'PCT_WHITE' < 60 AND 'PCT_WHITE' > 40 ",
      polygonOptions: {
        fillColor: '#007EFF',
        fillOpacity: 0.3
      }
    },{
      where: "'PCT_WHITE' < 80 AND 'PCT_WHITE' > 60 ",
      polygonOptions: {
        fillColor: '#0BC5E8',
        fillOpacity: 0.3
      }
    },{
      where: "'PCT_WHITE' <= 100 AND 'PCT_WHITE' >= 80 ",
      polygonOptions: {
        fillColor: '#00FFCB',
        fillOpacity: 0.3
      }
    }]
  });
  racelayer.setMap(map1);

  drawlines(map1);

}
